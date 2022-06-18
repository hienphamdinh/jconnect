import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const BottomTab = createBottomTabNavigator();
export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator initialRouteName="HomeScreen">
      <BottomTab.Screen
        name="HomeScreen"
        component={require('screens/BottomTab/HomeScreen').default}
      />
    </BottomTab.Navigator>
  );
}
