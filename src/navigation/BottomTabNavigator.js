import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const BottomTab = createBottomTabNavigator();
export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator initialRouteName="HomeScreen">
      <BottomTab.Screen
        name="HomeScreen"
        component={require('screens/BottomTab/Home').default}
        options={{
          tabBarIcon: ({focused, tintColor}) => (
            <Foundation
              name="home"
              color={focused ? '#49AC5A' : '#ccc'}
              size={24}
            />
          ),
          tabBarLabel: () => {
            return null;
          },
        }}
        Ï
      />
      <BottomTab.Screen
        name="Bookmarks"
        component={require('screens/BottomTab/Bookmarks').default}
        options={{
          tabBarIcon: ({focused, tintColor}) => (
            <Ionicons
              name="ios-bookmarks"
              color={focused ? '#49AC5A' : '#ccc'}
              size={20}
            />
          ),
          tabBarLabel: () => {
            return null;
          },
        }}
      />
      <BottomTab.Screen
        name="Messages"
        component={require('screens/BottomTab/Messages').default}
        options={{
          tabBarIcon: ({focused, tintColor}) => (
            <MaterialCommunityIcons
              name="message-text"
              color={focused ? '#49AC5A' : '#ccc'}
              size={24}
            />
          ),
          tabBarLabel: () => {
            return null;
          },
        }}
      />
      <BottomTab.Screen
        name="Notifications"
        component={require('screens/BottomTab/Notifications').default}
        options={{
          tabBarIcon: ({focused, tintColor}) => (
            <Ionicons
              name="ios-notifications"
              color={focused ? '#49AC5A' : '#ccc'}
              size={24}
            />
          ),
          tabBarLabel: () => {
            return null;
          },
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={require('screens/BottomTab/Settings').default}
        options={{
          tabBarIcon: ({focused, tintColor}) => (
            <Ionicons
              name="settings-sharp"
              color={focused ? '#49AC5A' : '#ccc'}
              size={24}
            />
          ),
          tabBarLabel: () => {
            return null;
          },
        }}
      />
    </BottomTab.Navigator>
  );
}
