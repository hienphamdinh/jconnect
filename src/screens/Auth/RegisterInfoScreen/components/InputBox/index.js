import React, {memo} from 'react';
import {View, TextInput, Text} from 'react-native';
import styles from './styles';
const InputBox = ({title, style, labelStyle, inputStyle, ...otherProps}) => {
  return (
    <View style={[styles.inputBox]}>
      {title && <Text style={[styles.inputLabel, labelStyle]}>{title}</Text>}
      <TextInput style={[styles.input, inputStyle]} {...otherProps} />
    </View>
  );
};

export default memo(InputBox);
