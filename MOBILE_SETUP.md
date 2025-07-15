# Capacitor Mobile App Instructions

This project is now configured as a Progressive Web App (PWA) with Capacitor support for native mobile capabilities.

## Mobile App Development

To run this app on a physical device or emulator:

### Prerequisites
1. Export the project to your GitHub repository via the "Export to Github" button
2. Git pull the project from your GitHub repository
3. Run `npm install` to install dependencies

### For iOS Development (Mac with Xcode required)
1. Add iOS platform: `npx cap add ios`
2. Update iOS dependencies: `npx cap update ios`
3. Build the project: `npm run build`
4. Sync to native platform: `npx cap sync`
5. Run on iOS: `npx cap run ios`

### For Android Development (Android Studio required)
1. Add Android platform: `npx cap add android`
2. Update Android dependencies: `npx cap update android`
3. Build the project: `npm run build`
4. Sync to native platform: `npx cap sync`
5. Run on Android: `npx cap run android`

### Hot Reload
The app is configured for hot reload from the Lovable sandbox. The mobile app will automatically update when you make changes in the Lovable editor.

### Important Notes
- Always run `npx cap sync` after pulling updates from Git
- The app ID is: `app.lovable.25eb8779b98e4906a4d835846ab5ee78`
- App name: `mahrous-hospitality-profile`

For detailed mobile development guidance and troubleshooting, please read: https://lovable.dev/blogs/TODO