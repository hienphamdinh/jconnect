import React from 'react';
import {View} from 'react-native';
import FastImage from 'react-native-fast-image';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';
import isEmpty from 'lodash/isEmpty';
import styles from './styles';

export default function Avatar({source, imageStyle, style, sizeIcon = 30}) {
  return (isEmpty(source?.uri) && isEmpty(source)) || isEmpty(source?.uri) ? (
    <View style={[styles.imageWrapper, style]}>
      <FontAwesome5Icons name="user" size={sizeIcon} />
    </View>
  ) : (
    <View style={[styles.imageWrapper, style]}>
      <FastImage source={source} style={[styles.img, imageStyle]} />
    </View>
  );
}
