import React, {useEffect, useCallback} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import LottieView from 'lottie-react-native';
import Animations from 'themes/Animations';
import {WIDTH_RATIO} from 'themes/Dimens';
import {useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Storage from 'constants/Storage';
import get from 'lodash/get';

export default function SplashScreens() {
  const navigation = useNavigation();
  const tokenLocal = useSelector(state => get(state, 'user.token'));

  const onAppStart = useCallback(async () => {
    SplashScreen.hide();
    const storeToken = await AsyncStorage.getItem(Storage.ACCESS_TOKEN);
    const token = storeToken || tokenLocal;

    if (token) {
      navigation.reset({
        index: 0,
        routes: [
          {
            name: 'BottomTabNavigator',
          },
        ],
      });
    } else {
      navigation.reset({
        index: 0,
        routes: [
          {
            name: 'AuthenticationStack',
          },
        ],
      });
    }
  }, [navigation, tokenLocal]);

  useEffect(() => {
    onAppStart();
  }, [onAppStart]);

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
