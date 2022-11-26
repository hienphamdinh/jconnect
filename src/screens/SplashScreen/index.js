import React, {useEffect, useCallback} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import LottieView from 'lottie-react-native';
import Animations from 'themes/Animations';
import {WIDTH_RATIO} from 'themes/Dimens';
import {useSelector, useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Storage from 'constants/Storage';
import get from 'lodash/get';
import UserActions from 'store/user/action';

export default function SplashScreens() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const tokenLocal = useSelector(state => get(state, 'user.token'));
  const userInfo = useSelector(state => get(state, 'user.info'));

  const onAppStart = useCallback(async () => {
    SplashScreen.hide();
    const storeToken = await AsyncStorage.getItem(Storage.ACCESS_TOKEN);
    const token = storeToken || tokenLocal;

    if (token) {
      dispatch(
        UserActions.login(
          get(userInfo, 'account.email'),
          get(userInfo, 'account.password'),
          () => {
            navigation.reset({
              index: 0,
              routes: [
                {
                  name: 'BottomTabNavigator',
                },
              ],
            });
          },
          () => {
            navigation.reset({
              index: 0,
              routes: [
                {
                  name: 'AuthenticationStack',
                },
              ],
            });
          },
        ),
      );
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
  }, [dispatch, navigation, tokenLocal, userInfo]);

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
