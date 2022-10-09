import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import size from 'lodash/size';
import styles from './styles';
export default function PrimaryInputLabel({
  style,
  label,
  value,
  error,
  onClearInput,
  ...otherPropsInput
}) {
  return (
    <>
      <View style={[styles.inputBox, style]}>
        <Text style={styles.inputLabel}>{label}</Text>
        <View style={styles.rowInput}>
          <TextInput
            style={styles.input}
            keyboardType="email-address"
            textContentType="emailAddress"
            autoCapitalize="none"
            value={value}
            {...otherPropsInput}
          />
          <TouchableOpacity style={styles.closeIcon} onPress={onClearInput}>
            <AntDesign name="close" />
          </TouchableOpacity>
        </View>
      </View>
      {size(error) > 0 && <Text style={styles.error}>{error}</Text>}
    </>
  );
}
