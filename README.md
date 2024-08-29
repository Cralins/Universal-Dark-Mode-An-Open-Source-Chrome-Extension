# Universal-Dark-Mode-An-Open-Source-Chrome-Extension
Universal Dark Mode: An Open-Source Chrome Extension
This code implements a basic dark mode toggle for web pages using a Chrome extension.

Functionality:

Dynamic Styling: Applies custom CSS styles to transform websites to dark mode, focusing on common elements like body background, text, buttons, and input fields.
Website-Specific Styles: Includes specific styles for LinkedIn and YouTube, targeting their unique elements for a more polished dark mode experience.
CSS Variables: Employs CSS variables to create a customizable dark mode color scheme that can be easily changed through a settings page (not included in this basic example).
Smooth Transitions: Implements transitions for color changes to ensure a smooth visual experience.
Chrome Extension Integration: Utilizes Chrome extension APIs for communication between the content script (this code) and the extension's background script (not included), enabling dark mode toggle functionality through the extension's user interface.
Storage: Retrieves user settings from Chrome's storage to remember the user's dark mode preferences.
User Customization: Allows users to control whether the dark mode is applied for specific websites, including disabling it for websites they prefer to view in their default color scheme.

Implementation:

createDarkModeStyle(): Creates a new style element to be inserted into the document's head, containing the dark mode CSS rules.
applyDarkMode(): Adds the generated style element to the document's head and sets the document's color-scheme property to 'dark'.
removeDarkMode(): Removes the style element from the document's head and clears the document's color-scheme property.
toggleDarkMode(): Calls either applyDarkMode() or removeDarkMode() based on the user's preference.
getLinkedInStyles() & getYouTubeStyles(): Return CSS rules tailored specifically for LinkedIn and YouTube respectively.
Chrome Extension Integration: Uses chrome.runtime.onMessage.addListener() to listen for messages from the background script.
Initial Dark Mode Application: Loads the user's saved settings from Chrome's storage on page load to apply the correct dark mode setting for the current website.

Improvements:

More Website Support: Add more website-specific styles to extend dark mode to a wider range of websites.
Customization Options: Implement a settings page to allow users to customize their preferred dark mode color scheme.
Advanced Logic: Use more sophisticated methods like CSS selectors or element matching for more precise targeting and to avoid potential style conflicts with existing website CSS.
Dynamic Color Scheme Adaptation: Consider automatically generating a dark color scheme based on the website's light color scheme to offer a more cohesive user experience.
