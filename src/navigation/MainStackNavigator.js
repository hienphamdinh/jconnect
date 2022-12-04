import React, {useCallback, useEffect, useRef} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppState} from 'react-native';
import {updateUser} from 'store/user/service';
import {useSelector} from 'react-redux';
import get from 'lodash/get';
import dayjs from 'dayjs';

const MainStack = createNativeStackNavigator();
export default function MainStackNavigator() {
  const appState = useRef(AppState.currentState);
  const userId = useSelector(state => get(state, 'user.info._id'));

  const updateUserActive = useCallback(
    (data = {}) => {
      if (userId) {
        updateUser(userId, data);
      }
    },
    [userId],
  );

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        updateUserActive({
          justNow: 'on',
        });
        console.log({
          status: 'on',
        });
      } else {
        console.log({
          status: 'off',
          userId,
        });
        updateUserActive({
          justNow: 'off',
          timeOff: dayjs().toISOString(),
        });
      }

      appState.current = nextAppState;
    });

    return () => {
      subscription.remove();
    };
  }, [updateUserActive, userId]);

  return (
    <MainStack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{headerShown: false}}>
      <MainStack.Screen
        name="SplashScreen"
        component={require('screens/SplashScreen').default}
      />
      <MainStack.Screen
        name="AuthenticationStack"
        component={require('./AuthenticationStack').default}
      />
      <MainStack.Screen
        name="BottomTabNavigator"
        component={require('./BottomTabNavigator').default}
      />
      <MainStack.Screen
        name="JobDetailScreen"
        component={require('screens/JobDetailScreen').default}
      />
      <MainStack.Screen
        name="PostJobScreen"
        component={require('screens/PostJobScreen').default}
      />
      <MainStack.Screen
        name="SuccessScreen"
        component={require('screens/SuccessScreen').default}
      />
      <MainStack.Screen
        name="FailedScreen"
        component={require('screens/FailedScreen').default}
      />
      <MainStack.Screen
        name="ApplicationScreen"
        component={require('screens/ApplicationScreen').default}
      />
      <MainStack.Screen
        name="ApplyJobSuccess"
        component={require('screens/ApplyJobSuccess').default}
      />
      <MainStack.Screen
        name="MyJobsScreen"
        component={require('screens/MyJobsScreen').default}
      />
      <MainStack.Screen
        name="MyProfileScreen"
        component={require('screens/MyProfileScreen').default}
      />
      <MainStack.Screen
        name="MessageDetailScreen"
        component={require('screens/MessageDetailScreen').default}
      />
      <MainStack.Screen
        name="ListApplicationScreen"
        component={require('screens/ListApplicationScreen').default}
      />
      <MainStack.Screen
        name="UpdateInfoScreen"
        component={require('screens/UpdateInfoScreen').default}
      />
      <MainStack.Screen
        name="ChangePasswordScreen"
        component={require('screens/ChangePasswordScreen').default}
      />
      <MainStack.Screen
        name="UpdateJobScreen"
        component={require('screens/UpdateJobScreen').default}
      />
    </MainStack.Navigator>
  );
}
