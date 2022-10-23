import React from 'react';
import {View, Text} from 'react-native';
import OpacityButton from 'components/OpacityButton';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from 'themes/Colors';
export default function SettingItemComponent(props) {
  const {item} = props;
  return (
    <OpacityButton style={styles.container} onPress={item.onPress}>
      <AntDesign name={item.icon} size={20} color={item.colorIcon} />
      <View style={styles.iconContainer}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
      <AntDesign name="right" size={20} color={Colors.primary} />
    </OpacityButton>
  );
}
