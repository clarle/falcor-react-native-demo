# falcor-react-native-demo

Example app using Falcor inside of a React Native application

## Getting Started

There's two parts to this application - the Falcor service itself, and the React Native client that makes a call to it:

* The `server` directory contains the code to the Falcor service.

* The `client` directory contains the React Native application.

### Running the Falcor service

Inside the `server` directory, run:

```
$ npm install
$ npm run start
```

You should see the Falcor service start running on port 3000 (by default).

### Running the React Native application

Follow the [Getting Started instructions](https://facebook.github.io/react-native/docs/getting-started.html) on the official React Native site, if you haven't done so already.

Then, if you're running the iOS application, go into the `client` directory and run:
```
$ react-native run-ios
```

If you're running the Android application, you'll need to get your IP address first, since the Android emulator assumes that `localhost` is within the emulator itself.

You can usually get it on the command line with `ipconfig getifaddr en1` or `ipconfig getifaddr en0`.

Then, replace the `server` variable in `index.android.js` with your local IP address:
```js
const server = '123.45.67.89';
```

Then, you can just run the Android application with:
```
$ react-native run-android
```

If everything works, you should see "Hello from Falcor!" inside the app!
