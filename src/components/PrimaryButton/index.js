import React from 'react';
import {TouchableOpacity, Text, ActivityIndicator} from 'react-native';
import styles from './styles';
export default function PrimaryButton({
  customStyle,
  textStyle,
  loading,
  title,
  disable,
  onPress,
}) {
  return (
    <TouchableOpacity
      disabled={disable}
      style={[styles.loginButton, disable && styles.disable, customStyle]}
      onPress={onPress}>
      {loading && !disable ? (
        <ActivityIndicator color={'white'} size={27} />
      ) : (
        <Text style={[styles.loginButtonText, textStyle]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}
