let isDarkModeOn = false;
let darkModeStyle = null;

function createDarkModeStyle() {
  darkModeStyle = document.createElement('style');
  darkModeStyle.id = 'dark-mode-style';
  darkModeStyle.textContent = `
    /* 
      ROOT LEVEL STYLES (Apply to All Websites): 
      - Define your dark mode color scheme here using CSS variables
      - These can be easily reused throughout your styles 
    */
    :root {
      --dark-bg: #000000;             /* Main background color */
      --dark-surface: #1D2226;         /* Surfaces like cards, modals */
      --dark-text: #FFFFFF;           /* Primary text color */
      --dark-secondary-text: #B0B0B0; /* Lighter text for secondary info */
      --dark-border: #38434F;         /* Borders and dividers */
      --dark-hover: #2C3439;         /* Hover effect for elements */
      --dark-button: #38434F;         /* Background color for buttons */
      --dark-button-text: #FFFFFF;     /* Text color on buttons */
    }

    /* GENERAL STYLES 
       - Apply to all websites as a base for your dark mode 
       - Consider being more specific here with element selectors if you
         need to override common styles.
    */
    body, 
    .global-nav__content {
      background-color: var(--dark-bg) !important;
      color: var(--dark-text) !important;
      transition: background-color 0.3s, color 0.3s; /* Smooth transitions */
    }

    a {
      color: var(--dark-text) !important;
    }

    input, 
    textarea, 
    select {
      background-color: var(--dark-surface) !important;
      color: var(--dark-text) !important;
      border-color: var(--dark-border) !important;
    }

    /* GENERAL BUTTON STYLES 
       - These styles target common button classes, but you'll likely 
         need more website-specific rules for button variations.
    */
    .artdeco-button,
    .artdeco-button--primary {
      background-color: var(--dark-button) !important;
      color: var(--dark-button-text) !important;
      border: none !important; 
      box-shadow: none !important; 
      border-radius: 4px !important;
      padding: 6px 16px !important;
      font-weight: 600 !important;
      transition: background-color 0.3s !important; 
    }

    .artdeco-button:hover, 
    .artdeco-button--primary:hover {
      background-color: var(--dark-hover) !important;
    }

    /* WEBSITE-SPECIFIC STYLES:
       - The styles for LinkedIn and YouTube will be added here dynamically 
         based on the current domain. 
    */
    ${getLinkedInStyles()} /* LinkedIn-specific rules */
    ${getYouTubeStyles()}  /* YouTube-specific rules  */

    /* LinkedIn'e Özgü Stil Değişiklikleri */
    /* Genel Buton Stilleri */
    .artdeco-button,
    .artdeco-button--primary,
    .artdeco-dropdown__trigger,
    .feed-shared-social-action-bar__action-button {
        background-color: transparent !important;
        color: var(--dark-button-text) !important;
        border: none !important;
    }

    /* Buton Üzerine Gelindiğinde */
    .artdeco-button:hover,
    .artdeco-button--primary:hover,
    .artdeco-dropdown__trigger:hover,
    .feed-shared-social-action-bar__action-button:hover {
        background-color: rgba(0, 0, 0, 0.1) !important;
    }

    /* Belirli Buton Stilleri */
    .artdeco-button--muted,
    .artdeco-button--tertiary {
        border: none !important;
    }

    /* Sosyal Paylaşım Aksiyon Çubuğu */
    .feed-shared-social-action-bar {
        background-color: var(--dark-background) !important;
        border-top: 1px solid var(--dark-border) !important;
    }

    /* Reaksiyon Butonları */
    .reactions-react-button {
        background-color: transparent !important;
        color: var(--dark-button-text) !important;
    }

    .reactions-react-button:hover {
        background-color: rgba(0, 0, 0, 0.1) !important;
    }

    /* Dropdown Menüler */
    .artdeco-dropdown__content {
        background-color: var(--dark-dropdown-background) !important;
        border: 1px solid var(--dark-border) !important;
    }

    /* Diğer Stil Değişiklikleri */
    .artdeco-accordion-header {
        color: var(--dark-text) !important;
        background-color: var(--dark-background) !important;
    }

    /* Dark Mode Değişkenleri */
    :root { /* Dark Mode Variables */
        --dark-background: #1c1c1c;
        --dark-border: #333;
        --dark-button-text: #ddd;
        --dark-dropdown-background: #2b2b2b;
        --dark-text: #e5e5e5;
    }
  `; // End of the darkModeStyle.textContent string
}

/*  ---------------------------------- 
    LINKEDIN-SPECIFIC STYLES 
------------------------------------- */
function getLinkedInStyles() {
  // Only apply if on a linkedin.com domain
  if (!window.location.hostname.includes('linkedin.com')) return '';

  return `
    /* Genel stil düzenlemeleri */
    body, 
    #global-nav, 
    .global-nav__content, 
    .feed-shared-update-v2, 
    .scaffold-layout__main {
        background-color: var(--dark-bg) !important;
        color: var(--dark-text) !important;
    }

    /* İstediğiniz gri alanları hedefleyin ve arka planlarını şeffaf yapın */
    .feed-shared-update-v2__header, 
    .feed-shared-update-v2__footer, 
    .scaffold-layout__aside, 
    .job-card-container,
    .job-card-list,
    .jobs-search-results__list-item,
    .social-details-social-counts {
        background-color: transparent !important; 
        border: none !important;
        box-shadow: none !important;
    }

    .social-details-social-counts__item {
        background-color: transparent !important;
        color: var(--dark-secondary-text) !important;
    }
    
    /* Navigation bar */
    .global-nav__primary-items .global-nav__primary-item > a,
    .global-nav__secondary-items .global-nav__secondary-item > a {
        color: var(--dark-text) !important;
    }

    /* Search bar */
    .search-global-typeahead__input {
        background-color: var(--dark-surface) !important;
        color: var(--dark-text) !important;
        border: 1px solid var(--dark-border) !important;
    }

    /* Posts and cards */
    .feed-shared-update-v2, 
    .artdeco-card, 
    .share-box-feed-entry__closed-share-box,
    .jobs-search-two-pane__details {
        background-color: var(--dark-surface) !important;
        border: 1px solid var(--dark-border) !important;
        box-shadow: none !important;
        margin: 8px 0 !important;
        border-radius: 8px !important;
    }

    /* Text colors */
    h1, h2, h3, h4, h5, h6, p, span, div {
        color: var(--dark-text) !important;
    }

    /* Links */
    a, .feed-shared-actor__name, .feed-shared-actor__description {
        color: var(--dark-text) !important;
    }

    /* Icons */
    .artdeco-icon {
        fill: var(--dark-text) !important;
    }

    /* Job seeker guidance card */
    .job-seeker-guidance {
        background-color: var(--dark-surface) !important;
        border: 1px solid var(--dark-border) !important;
    }

    /* Recent searches */
    .recent-search-item {
        background-color: var(--dark-surface) !important;
        border: 1px solid var(--dark-border) !important;
    }

    /* Job collections */
    .job-collection-card {
        background-color: var(--dark-surface) !important;
        border: 1px solid var(--dark-border) !important;
    }

    /* Ensure text readability */
    .t-black--light, .t-14, .t-12, .t-bold {
        color: var(--dark-text) !important;
    }

    /* Fix for any remaining white backgrounds */
    div, section, aside {
        background-color: transparent !important;
    }

    /* Reaction buttons */
    .reactions-reaction-button {
        background-color: var(--dark-surface) !important;
        color: var(--dark-text) !important;
        border: 1px solid var(--dark-border) !important;
    }

    /* Comment section */
    .comments-comment-box {
        background-color: var(--dark-surface) !important;
        border: 1px solid var(--dark-border) !important;
    }

    /* Hover effects */
    .feed-shared-update-v2:hover {
        background-color: var(--dark-hover) !important;
    }

    /* Side panel and other areas */
    .feed-following-list, 
    .feed-shared-news-module {
        background-color: var(--dark-surface) !important;
        border: 1px solid var(--dark-border) !important;
        border-radius: 8px !important;
    }

    /* "...more" butonu için özel ve agresif stiller */
    .feed-shared-inline-show-more-text,
    .see-more-less-toggle,
    .feed-shared-inline-show-more-text span,
    button[aria-label="See more"] {
      background-color: transparent !important;
      color: var(--dark-secondary-text) !important;
      border: none !important;
      padding: 4px 0 !important;
      margin: 0 !important;
      font-size: 14px !important;
      font-weight: 600 !important;
      cursor: pointer !important;
      transition: color 0.3s ease !important;
      box-shadow: none !important;
      text-decoration: none !important;
    }

    .feed-shared-inline-show-more-text:hover,
    .see-more-less-toggle:hover,
    button[aria-label="See more"]:hover {
      color: var(--dark-text) !important;
      text-decoration: none !important; 
    }

    /* Butonun konumlandırılması için ek stil */
    .feed-shared-update-v2__description-wrapper,
    .feed-shared-text-view {
      display: flex !important;
      flex-direction: column !important;
      align-items: flex-start !important;
      background-color: transparent !important;
    }

    /* Buton metninin arka planını ve çevresindeki tüm elementleri temizle */
    .feed-shared-inline-show-more-text *,
    .see-more-less-toggle *,
    .feed-shared-text-view > span,
    .feed-shared-text-view > span > span,
    .feed-shared-update-v2__description-wrapper * {
      background-color: transparent !important;
      box-shadow: none !important;
    }

    /* Gönderi içeriğinin arka planını temizle */
    .feed-shared-update-v2__description-wrapper,
    .feed-shared-update-v2__description,
    .feed-shared-text-view,
    .feed-shared-actor__description {
      background-color: transparent !important;
    }

    /* Gönderi metninin rengini ayarla */
    .feed-shared-text-view,
    .feed-shared-actor__description,
    .feed-shared-text-view * {
      color: var(--dark-text) !important;
    }

    /* Messaging interface improvements */
    .msg-conversations-container__conversations-list {
        background-color: var(--dark-bg) !important;
    }

    .msg-conversation-listitem__link {
        background-color: var(--dark-bg) !important;
        border-bottom: 1px solid var(--dark-border) !important;
    }

    .msg-conversation-listitem__link:hover {
        background-color: var(--dark-hover) !important;
    }

    .msg-conversation-card__row {
        background-color: var(--dark-bg) !important;
    }

    .msg-conversation-card__row:hover {
        background-color: var(--dark-hover) !important;
    }

    .msg-conversation-listitem__participant-names,
    .msg-conversation-listitem__message-snippet-body,
    .msg-conversation-card__message-snippet-body {
        color: var(--dark-text) !important;
    }

    .msg-conversation-listitem__time-stamp,
    .msg-conversation-card__time-stamp {
        color: var(--dark-secondary-text) !important;
    }

    .msg-overlay-list-bubble__default-conversation-image {
        background-color: var(--dark-surface) !important;
    }

    .msg-form {
        background-color: var(--dark-bg) !important;
        border-top: 1px solid var(--dark-border) !important;
    }

    .msg-form__contenteditable {
        background-color: var(--dark-bg) !important;
        color: var(--dark-text) !important;
    }

    .msg-s-message-list-container {
        background-color: var(--dark-bg) !important;
    }

    .msg-s-message-list__event {
        color: var(--dark-secondary-text) !important;
    }

    .msg-s-message-group__meta {
        color: var(--dark-secondary-text) !important;
    }

    .msg-s-event-listitem__body {
        color: var(--dark-text) !important;
    }

    /* Notifications page styles */
    .notifications__container {
        background-color: var(--dark-bg) !important;
    }

    .notifications__filter-bar {
        background-color: var(--dark-surface) !important;
        border-bottom: 1px solid var(--dark-border) !important;
    }

    .notifications__filter-item {
        color: var(--dark-text) !important;
    }

    .notifications__filter-item--selected {
        background-color: var(--dark-hover) !important;
    }

    .notification-card {
        background-color: var(--dark-bg) !important;
        border-bottom: 1px solid var(--dark-border) !important;
    }

    .notification-card:hover {
        background-color: var(--dark-hover) !important;
    }

    .notification-card__actor-name,
    .notification-card__occlusion-message,
    .notification-card__body {
        color: var(--dark-text) !important;
    }

    .notification-card__action-text {
        color: var(--dark-secondary-text) !important;
    }

    .notification-card__time-ago {
        color: var(--dark-secondary-text) !important;
    }

    /* Jobs page styles */
    .jobs-search-results-list,
    .jobs-search-results__list,
    .jobs-search-two-pane__wrapper {
        background-color: var(--dark-bg) !important;
    }

    .jobs-search-results__list-item:hover {
        background-color: var(--dark-hover) !important;
    }

    .job-card-list__title {
        color: var(--dark-text) !important;
    }

    .job-card-container__company-name,
    .job-card-container__metadata-wrapper {
        color: var(--dark-secondary-text) !important;
    }

    .jobs-search-box__input {
        background-color: var(--dark-surface) !important;
        color: var(--dark-text) !important;
    }

    .jobs-search-box__input::placeholder {
        color: var(--dark-secondary-text) !important;
    }

    /* Ensure code snippets are readable */
    pre, 
    code {
        background-color: #2C3439 !important;
        color: #E6E6E6 !important;
        border: 1px solid var(--dark-border) !important;
        border-radius: 4px !important;
    }

    /* New styles for job update and top job picks */
    .job-update-card, 
    .top-job-picks-card {
        background-color: var(--dark-surface) !important;
        border: 1px solid var(--dark-border) !important;
        color: var(--dark-text) !important;
    }

    .job-update-card__title, 
    .top-job-picks-card__title {
        color: var(--dark-text) !important;
    }

    .job-update-card__company, 
    .top-job-picks-card__company {
        color: var(--dark-secondary-text) !important;
    }

    .job-update-card__apply-button, 
    .top-job-picks-card__view-job-button {
        background-color: var(--dark-button) !important;
        color: var(--dark-button-text) !important;
    }

    .job-collections-card {
        background-color: var(--dark-surface) !important;
        border: 1px solid var(--dark-border) !important;
    }

    .job-collections-card__title {
        color: var(--dark-text) !important;
    }

    .job-collections-card__item {
        background-color: var(--dark-hover) !important;
        color: var(--dark-text) !important;
    }

    /* Recent searches in jobs page */
    .recent-searches-card {
        background-color: var(--dark-surface) !important;
        border: 1px solid var(--dark-border) !important;
    }

    .recent-searches-card__title {
        color: var(--dark-text) !important;
    }

    .recent-searches-card__item {
        background-color: var(--dark-hover) !important;
        color: var(--dark-text) !important;
    }

    /* Adjust styles for clean, minimalist look */
    .artdeco-card {
        background-color: var(--dark-surface) !important;
        border: none !important;
        box-shadow: none !important;
    }

    .feed-shared-update-v2 {
        background-color: var(--dark-surface) !important;
        border: none !important;
        margin-bottom: 8px !important;
    }

    .feed-shared-update-v2__description-wrapper {
        color: var(--dark-text) !important;
    }

    .feed-shared-text-view {
        color: var(--dark-text) !important;
    }

    /* Ensure contrast for secondary information */
    .feed-shared-actor__sub-description,
    .feed-shared-update-v2__sub-text {
        color: var(--dark-secondary-text) !important;
    }
  `;
} 

/* ------------------------------ 
    YOUTUBE-SPECIFIC STYLES
   ------------------------------ */
function getYouTubeStyles() {
    // Only apply if on a youtube.com domain
    if (!window.location.hostname.includes('youtube.com')) return ''; 

    return `
        html {
            --yt-spec-base-background: var(--dark-bg) !important;
            --yt-spec-raised-background: var(--dark-surface) !important;
            --yt-spec-menu-background: var(--dark-surface) !important;
            --yt-spec-inverted-background: var(--dark-text) !important;
            --yt-spec-text-primary: var(--dark-text) !important;
            --yt-spec-text-secondary: var(--dark-secondary-text) !important;
            --yt-spec-brand-background-primary: var(--dark-bg) !important;
            --yt-spec-brand-background-secondary: var(--dark-surface) !important;
            --yt-spec-10-percent-layer: rgba(255, 255, 255, 0.1) !important;
            --yt-spec-brand-button-background: var(--dark-button) !important;
        }

        ytd-app, ytd-watch-flexy {
            background-color: var(--yt-spec-base-background) !important;
        }

        ytd-masthead {
            background-color: var(--yt-spec-base-background) !important;
        }

        ytd-searchbox[id="search"] {
            background-color: var(--yt-spec-raised-background) !important;
        }

        ytd-searchbox[id="search"] input {
            color: var(--yt-spec-text-primary) !important;
        }

        ytd-searchbox[id="search"] #search-icon-legacy {
            color: var(--yt-spec-text-secondary) !important;
        }

        ytd-button-renderer[id="button"] {
            background-color: var(--yt-spec-brand-button-background) !important;
            border: none !important;
        }

        #contents.ytd-rich-grid-renderer {
            background-color: var(--yt-spec-base-background) !important;
        }

        ytd-rich-item-renderer {
            background-color: var(--yt-spec-raised-background) !important;
        }

        #video-title, .ytd-channel-name {
            color: var(--yt-spec-text-primary) !important;
        }

        yt-formatted-string[id="text"] {
            color: var(--yt-spec-text-secondary) !important;
        }

        ytd-guide-renderer {
            background-color: var(--yt-spec-base-background) !important;
        }

        ytd-guide-entry-renderer {
            color: var(--yt-spec-text-primary) !important;
        }

        .ytp-chrome-controls .ytp-button {
            color: var(--yt-spec-text-primary) !important;
        }

        .ytp-chrome-bottom {
            background-color: rgba(0, 0, 0, 0.5) !important;
        }
    `;
}

/* ------------------------------ 
    DARK MODE APPLICATION LOGIC 
   ------------------------------ */
function applyDarkMode() {
  if (!darkModeStyle) {
    createDarkModeStyle();
  }
  document.head.appendChild(darkModeStyle); 
  document.documentElement.style.setProperty('color-scheme', 'dark');
  isDarkModeOn = true; 
}

function removeDarkMode() { 
  if (darkModeStyle && darkModeStyle.parentNode) {
    darkModeStyle.parentNode.removeChild(darkModeStyle);
  }
  document.documentElement.style.removeProperty('color-scheme');
  isDarkModeOn = false;
}

function toggleDarkMode(applyDark) { 
  if (applyDark) {
    applyDarkMode(); 
  } else {
    removeDarkMode(); 
  }
}

/* ----------------------------------------------
   CHROME EXTENSION COMMUNICATION & INITIALIZATION 
   ---------------------------------------------- */
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => { 
  if (request.action === 'toggleDarkMode') {
    toggleDarkMode(request.applyDarkMode);
    sendResponse({ success: true });
  }
  return true; // Keep the message channel open
});

// Apply dark mode on page load based on user settings 
chrome.storage.sync.get(['darkModeSettings'], function(result) { 
  const settings = result.darkModeSettings || {};
  const hostname = window.location.hostname; 

  // Check if the user has settings for this domain 
  const applyDarkMode = settings[hostname] !== false; // Default to true

  // Apply or remove the dark mode
  toggleDarkMode(applyDarkMode);
});