import React, {useRef} from 'react';
import {LogBox, Text, TextInput} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {Provider} from 'react-redux';
import store, {persistedStore} from 'store';
import Toast from 'components/Toast';
import MainStackNavigator from 'navigation/MainStackNavigator';

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
  return (
    <NavigationContainer ref={navigationRef}>
      <MainStackNavigator />
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistedStore}>
        <RootComponent />
      </PersistGate>
    </Provider>
  );
};

export default App;
