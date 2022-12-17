import React from 'react';
import {StyleSheet, ActivityIndicator, View} from 'react-native';

import {WIDTH_RATIO} from 'themes/Dimens';

export default function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={50} />
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
