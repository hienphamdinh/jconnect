import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';

export default function SplashScreens() {
  const navigation = useNavigation();
  setTimeout(function () {
    SplashScreen.hide();
    navigation.navigate('AuthenticationStack');
  }, 2000);
  return (
    <View style={styles.container}>
      <Text>HeaderBar</Text>
      {/* <Images.SplashScreen /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  image: {
    height: '100%',
    width: '100%',
  },
});
