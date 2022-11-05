import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

export default function HeaderTitle({title, style}) {
  return (
    <View style={[styles.header, style]}>
      <Text style={styles.txtHeader}>{title}</Text>
    </View>
  );
}
