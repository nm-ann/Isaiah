# Leining-App-Template
Use this as a template when building leining apps.

# Set Up
Fork this repo and then run `npx react-native init ProjectName`. Afterward, copy all files except for App.js from the ProjectName folder into this folder. Afterward, you can delete the App.js folder.

# Menus
Modify the following:
- **src/utils/mainMenu.json:** This specifies information for all buttons on the menu. Each button requires a title, and icons, and a string representation of the screen component to which it should navigate.

- **src/utils/menu.json:** This specifies the sections and chapters of each menu option. Each menu option is represented as either an object with a title a list of chapters, or a list of such objects.

- **src/utils/settingsMenu.json:** This specifies information for each of the settings cards. Each card has a title, the name of the setting that it controls, and text for each of the options.

# Utils
Modify the following:
- **src/utils/strings.json:** This specifies and standardizes different strings that are used throguht the app

# Styles
Modify *src/styles/colors.json* to change the coloring of the app.

# Fonts
There is a file called *react-native.config.js*, which contains the path to the fonts. To add the fonts to both the android and ios apps, run `react-native link`

# Changing the app name
## Android
To change the android app's name, go to the `android/src/main/res/values/strings.xml` and update the `app_name` field.

## IOS
To change the ios app's name, open `ios/app_name/Info.plist` and update the bundle display name field.

# Running the App
- Android: npm run android
- iPhone: npm run ios
- iPad: npx react-native run-ios --simulator="iPad Pro (12.9-inch) (4th generation)"

# Generating Screenshots and Icons
I like to use `https://coolors.co/generate` to explore color schemes

Take screenshots for android and ios and put them in `listing/screenshots/android` and `listing/screenshots/ios`. Name android screenshots `$screen_android`, ipad screenshots `$screen_ipad`, and iphone screenshots `$screen_iphone`. Modify `listing/screenshots/framefile.json` to include the right colors, screen names, and text. Create an app icon and place it in `listing/`. Then cd into the `listing` directory and run `./gen_graphics.sh -c $hex_color -i $icon_name`.

# Deployment
## Android
### Generate Signing Key
run `sudo keytool -genkey -v -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000` to generate a private signing key.

### Set Up Gradle Variables
1. Place the my-upload-key.keystore file under the android/app directory in your project folder.
2. Edit the file ~/.gradle/gradle.properties or android/gradle.properties, and add the following (replace ***** with the correct keystore password, alias and key password),
```
MYAPP_UPLOAD_STORE_FILE=my-upload-key.keystore
MYAPP_UPLOAD_KEY_ALIAS=my-key-alias
MYAPP_UPLOAD_STORE_PASSWORD=*****
MYAPP_UPLOAD_KEY_PASSWORD=*****
```
### Add the Signing Config
Edit the file android/app/build.gradle in your project folder, and add the signing config
```
...
android {
    ...
    defaultConfig { ... }
    signingConfigs {
        release {
            if (project.hasProperty('MYAPP_UPLOAD_STORE_FILE')) {
                storeFile file(MYAPP_UPLOAD_STORE_FILE)
                storePassword MYAPP_UPLOAD_STORE_PASSWORD
                keyAlias MYAPP_UPLOAD_KEY_ALIAS
                keyPassword MYAPP_UPLOAD_KEY_PASSWORD
            }
        }
    }
    buildTypes {
        release {
            ...
            signingConfig signingConfigs.release
        }
    }
}
...
```
### Ensure the App Version is Correct
Go to android/app/build.gradle and ensure the app version is correct
```
defaultConfig {
    ...
    versionCode 1 // input correct version code
    versionName "1.0" // input correct version name
}
```
### Generate the Release AAB
```
cd android
./gradlew bundleRelease
```

### Test the Release Version of the App
`npx react-native run-android --variant=release`

# Dependencies
- react navigation (npm i @react-navigation/native)
- react native file system (npm i react-native-fs)
- react navigation stack (npm i @react-navigation/stack)
- react native gesture handler (npm i react-native-gesture-handler)
- react native community async storage (npm i @react-native-community/async-storage)
- typescript (npm i typescript)
- react native modal (npm i react-native-modal)
- react native video (npm i react-native-video)
- react native music control (npm i react-native-music-control)
- react native vector icons (npm i react-native-vector-icons)
- gematriya (npm i gematriya)
- react native safe area context (npm i react-native-safe-area-context)
- react native community masked view (npm i @react-native-community/masked-view)
- react native screens (npm i react-native-screens)
