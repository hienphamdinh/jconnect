import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LottieView from 'lottie-react-native';
import Animations from 'themes/Animations';
import {WIDTH_RATIO} from 'themes/Dimens';

export default function Loading() {
  return (
    <View style={styles.container}>
      <LottieView
        source={Animations.circleAnimation}
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
