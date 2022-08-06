import React, {useRef, useState, useEffect} from 'react';
import {LogBox, Text, TextInput} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {Provider} from 'react-redux';
import store, {persistedStore} from 'store';
import Toast from 'components/Toast';
import MainStackNavigator from 'navigation/MainStackNavigator';
import messaging from '@react-native-firebase/messaging';
import firebase from '@react-native-firebase/app';
import codePush from 'react-native-code-push';

LogBox.ignoreLogs([
  'VirtualizedLists should never be nested',
  'Require cycle',
  'Cannot update',
  "Can't update",
  'react-native-extra-dimensions-android is only available on Android',
]);

let originalTextRender = Text.render;
let originalTextInputRender = TextInput.render;

Text.render = function (...args) {
  let origin = originalTextRender.call(this, ...args);
  let children = origin.props.children;

  return React.cloneElement(
    origin,
    {
      style: [
        {
          fontFamily: 'Roboto-Regular',
        },
        origin.props.style,
      ],
    },
    children,
  );
};

TextInput.render = function (...args) {
  let origin = originalTextInputRender.call(this, ...args);
  let children = origin.props.children;
  return React.cloneElement(
    origin,
    {
      style: [
        {
          fontFamily: 'Roboto-Regular',
        },
        origin.props.style,
      ],
    },
    children,
  );
};

const RootComponent = () => {
  const navigationRef = useRef();
  const [token, setToken] = useState('');
  const getFirebaseToken = async () => {
    await messaging().registerDeviceForRemoteMessages();

    const generatedToken = messaging().getToken();
    return generatedToken;
  };
  useEffect(() => {
    async function fetchData() {
      const generatedToken = await getFirebaseToken();
      console.log('gentoKen', generatedToken);
      setToken(generatedToken);
    }
    fetchData();
  });
  const onMessageReceived = async message => {
    console.log('message', message);
  };
  useEffect(() => {
    messaging().setBackgroundMessageHandler(onMessageReceived);
  }, []);
  return (
    <NavigationContainer ref={navigationRef}>
      <MainStackNavigator />
    </NavigationContainer>
  );
};

const App = () => {
  // firebase.initializeApp();
  return (
    <Provider store={store}>
      <PersistGate persistor={persistedStore}>
        <RootComponent />
      </PersistGate>
    </Provider>
  );
};

export default codePush(App);
