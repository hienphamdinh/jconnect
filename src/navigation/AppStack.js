import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const AppStack = createNativeStackNavigator();
export default function AuthenticationStack() {
  return (
    <AppStack.Navigator screenOptions={{headerShown: false}}>
      <AppStack.Screen
        name="LoginScreen"
        component={require('screens/Auth/LoginScreen').default}
      />
      <AppStack.Screen
        name="JobDetail"
        component={require('components/JobDetail').default}
      />
    </AppStack.Navigator>
  );
}
