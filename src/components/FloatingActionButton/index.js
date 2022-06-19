import React from 'react';
import OpacityButton from 'components/OpacityButton';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import {WIDTH_RATIO} from 'themes/Dimens';
export default function FloatingActionButton({onPress}) {
  return (
    <OpacityButton onPress={onPress} style={styles.container}>
      <AntDesign name="plus" size={25 * WIDTH_RATIO} color="white" />
    </OpacityButton>
  );
}
