import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';

const MainStack = createNativeStackNavigator();
export default function MainStackNavigator() {
  const navigation = useNavigation();
  //setTimeout(() => navigation.navigate("AuthenticationStack"), 2000);
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
    </MainStack.Navigator>
  );
}
