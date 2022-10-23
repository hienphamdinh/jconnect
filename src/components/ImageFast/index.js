import React from 'react';
import {View} from 'react-native';
import FastImage from 'react-native-fast-image';
import styles from './styles';

export default function ImageFast({
  source = {
    uri: 'https://firebasestorage.googleapis.com/v0/b/jconnect-b2c5d.appspot.com/o/jconnect%2Fimages%2Fplaystore-icon.png?alt=media&token=68a0117b-66f8-4d28-bd01-9d323ed3e4f3',
  },
  imageStyle,
  style,
}) {
  return (
    <View style={[styles.imageWrapper, style]}>
      <FastImage source={source} style={[styles.img, imageStyle]} />
    </View>
  );
}
