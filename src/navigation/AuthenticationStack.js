import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const AuthStack = createNativeStackNavigator();
export default function AuthenticationStack() {
  return (
    <AuthStack.Navigator screenOptions={{headerShown:false}}>
      <AuthStack.Screen name="LoginScreen" component={require("screens/Auth/LoginScreen").default}/>
    </AuthStack.Navigator>
  )
}
