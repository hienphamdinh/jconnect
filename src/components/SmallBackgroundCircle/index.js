import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';

export default function index() {
  return <View style={styles.smallCircle} />;
}

const styles = StyleSheet.create({
  smallCircle: {
    width: Dimensions.get('window').height * 0.4,
    height: Dimensions.get('window').height * 0.4,
    backgroundColor: '#49AC5A',
    borderRadius: 1000,
    position: 'absolute',
    bottom: Dimensions.get('window').width * -0.2,
    right: Dimensions.get('window').width * -0.3,
  },
});
