import React from 'react';
import {View} from 'react-native';
import styles from './styles';

export default function BlockProfile({style, children}) {
  return <View style={[styles.container, style]}>{children}</View>;
}
