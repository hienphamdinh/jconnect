import React from 'react';
import OpacityButton from 'components/OpacityButton';
import {Text, View} from 'react-native';
import styles from './styles';
export default function CheckButton({
  title,
  active,
  style,
  titleStyle,
  onPress,
}) {
  return (
    <OpacityButton style={[styles.container, style]} onPress={onPress}>
      <View
        style={[styles.checkCircle, active ? styles.active : styles.unActive]}
      />
      <Text style={[styles.title, titleStyle]}>{title}</Text>
    </OpacityButton>
  );
}
