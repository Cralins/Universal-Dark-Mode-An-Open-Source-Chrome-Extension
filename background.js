chrome.runtime.onInstalled.addListener(() => {
  // Set up default settings when the extension is installed 
  chrome.storage.sync.set({ darkModeSettings: {} }); 
});

function sendMessageToTab(tabId) {
  chrome.tabs.get(tabId, (tab) => { 
    if (chrome.runtime.lastError) {
      // Handle the error, maybe log it 
      console.error(chrome.runtime.lastError.message); 
      return;
    }

    if (tab.url) { // Check if the URL is valid
      const hostname = new URL(tab.url).hostname; 
      chrome.storage.sync.get(['darkModeSettings'], (result) => {
        const settings = result.darkModeSettings || {}; 
        const applyDarkMode = settings[hostname] !== false; // Default to true
        
        // Now send the message:
        chrome.tabs.sendMessage(tabId, { 
          action: 'toggleDarkMode', 
          applyDarkMode: applyDarkMode 
        }); 
      }); 
    }
  });
}

// Listen for tab updates (like loading completing)
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete') { 
    sendMessageToTab(tabId);
  }
});

// IMPORTANT:  Listen for tab activation 
// This ensures the script is activated/deactivated 
// when the user switches between tabs
chrome.tabs.onActivated.addListener((activeInfo) => {
  sendMessageToTab(activeInfo.tabId);
});