import React, {memo} from 'react';
import {View, TextInput, Text} from 'react-native';
import styles from './styles';
const InputBox = ({
  title,
  requireValue = false,
  style,
  labelStyle,
  inputStyle,
  error = false,
  ...otherProps
}) => {
  return (
    <View style={[styles.inputBox, style, error && styles.error]}>
      {title && (
        <Text style={[styles.inputLabel, labelStyle]}>
          {title}
          {requireValue && <Text style={styles.star}>*</Text>}
        </Text>
      )}
      <TextInput style={[styles.input, inputStyle]} {...otherProps} />
    </View>
  );
};

export default memo(InputBox);
