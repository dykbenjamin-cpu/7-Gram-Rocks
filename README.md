# Ask Me A Question - iOS App Setup

This is now a Progressive Web App (PWA) that can be installed on iOS and other devices!

## How to Install on iOS

### Method 1: Add to Home Screen (Recommended)
1. Open the app in Safari on your iPhone
2. Tap the **Share** button (box with arrow)
3. Scroll down and select **"Add to Home Screen"**
4. Choose a name and tap **Add**
5. The app will now appear on your home screen as a native app!

### Method 2: Share via URL
1. Copy the website URL
2. Send it to others via Messages, Email, etc.
3. They can open it in their browser and add it to their home screen

## Features

- **Offline Support** - Works without an internet connection
- **Standalone Mode** - Runs like a native app, fullscreen
- **Home Screen Icon** - Custom app icon and splash screen
- **Share Functionality** - Share the orb's answers with friends
- **Smart Responses** - The orb provides randomized answers

## How to Deploy

### Option 1: GitHub Pages (Free)
1. Create a GitHub repository
2. Push these files to the repo
3. Enable GitHub Pages in repository settings
4. Share the generated URL (e.g., `https://yourusername.github.io/question-orb`)

### Option 2: Any Web Host
1. Upload files to Netlify, Vercel, or any web hosting service
2. Share the public URL

### Option 3: Local Network
1. Run a local server: `python -m http.server` (Python 3)
2. Access via your local IP address

## File Structure

```
├── index.html      (Main HTML file with iOS meta tags)
├── style.css       (Styling and animations)
├── script.js       (App logic and AI response system)
├── manifest.json   (PWA configuration)
├── sw.js           (Service Worker for offline support)
└── README.md       (This file)
```

## Browser Compatibility

- ✅ iOS Safari 11+
- ✅ Android Chrome
- ✅ Desktop browsers
- ✅ Tablet devices

## Tips for Sharing

- The app works best when installed to home screen
- It will work offline after first load
- Responses are contextual based on the question asked
- Dark Mode provides harsher responses
- Normal Mode provides ambiguous responses

Enjoy the orb! 🎱
