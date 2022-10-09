import React, {memo} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';

function BigBackgroundCircle() {
  return <View style={styles.bigCircle} />;
}

export default memo(BigBackgroundCircle);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    overflow: 'hidden',
  },
  bigCircle: {
    width: Dimensions.get('window').height * 0.7,
    height: Dimensions.get('window').height * 0.7,
    backgroundColor: '#49AC5A',
    borderRadius: 1000,
    position: 'absolute',
    right: Dimensions.get('window').width * 0.25,
    top: -50,
  },
});
