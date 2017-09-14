# AwesomeProject

## How To Build on your phone.
```bash
$ git clone https://github.com/AWSKRUG1TEAM/APP
$ cd APP
$ npm install
$ react-native link
$ npm start
```

## Android
```bash
open AwesomeProject/android/ with Android Studio
touch run button
```

## IOS
```bash
open AwesomeProject/ios/AwesomeProject.xcodeproj
product/scheme/edit scheme, in build configuration set to 'release'
project/AwesomeProject, use 'Release' for command-line builds
touch run button
```

## Android Reverse Proxy
```sh
$ adb reverse tcp:8081 tcp:8081
```
