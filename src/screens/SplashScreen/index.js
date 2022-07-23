import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import LottieView from 'lottie-react-native';
import Animations from 'themes/Animations';
import {WIDTH_RATIO} from 'themes/Dimens';

export default function SplashScreens() {
  const navigation = useNavigation();
  setTimeout(function () {
    navigation.navigate('AuthenticationStack');
  }, 4000);
  useEffect(() => {
    setTimeout(function () {
      SplashScreen.hide();
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <LottieView
        source={Animations.launchAnimation}
        style={styles.animation}
        resizeMode="contain"
        autoSize
        autoPlay
        loop
      />
      <Text style={styles.txtLoading}>Loading...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  animation: {
    height: 150 * WIDTH_RATIO,
    width: 150 * WIDTH_RATIO,
  },
  txtLoading: {
    fontSize: 15 * WIDTH_RATIO,
  },
});
