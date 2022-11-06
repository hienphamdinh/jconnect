import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';

const MainStack = createNativeStackNavigator();
export default function MainStackNavigator() {
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
    </MainStack.Navigator>
  );
}
