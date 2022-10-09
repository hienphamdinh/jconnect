import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './styles';
export default function PrimaryTinyButton({
  customStyle,
  textStyle,
  title,
  onPress,
}) {
  return (
    <TouchableOpacity
      style={[styles.registerText, customStyle]}
      onPress={onPress}>
      <Text style={[styles.loginButtonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}
