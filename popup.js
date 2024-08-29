document.getElementById('darkModeToggle').addEventListener('change', function() {
  const hostname = new URL(window.location.href).hostname;
  const applyDarkMode = this.checked;
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { 
          action: 'toggleDarkMode', 
          applyDarkMode: applyDarkMode 
      });
      chrome.storage.sync.get(['darkModeSettings'], function(result) {
          const settings = result.darkModeSettings || {};
          settings[hostname] = applyDarkMode; 
          chrome.storage.sync.set({ darkModeSettings: settings }, function() {
              updateStatus(applyDarkMode); 
          });
      });
  });
});

function updateStatus(isDarkModeOn) {
  const statusDiv = document.getElementById('status');
  statusDiv.textContent = isDarkModeOn ? 'Dark Mode is ON' : 'Dark Mode is OFF';
}

chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
  const hostname = new URL(tabs[0].url).hostname;
  chrome.storage.sync.get(['darkModeSettings'], function(result) {
      const settings = result.darkModeSettings || {};
      const isDarkModeOn = settings[hostname] !== false;
      document.getElementById('darkModeToggle').checked = isDarkModeOn;
      updateStatus(isDarkModeOn);
  });
});