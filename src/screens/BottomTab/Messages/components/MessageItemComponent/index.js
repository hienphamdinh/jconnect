import React from 'react';
import {View, Text, Image} from 'react-native';
import OpacityButton from 'components/OpacityButton';
import styles from './styles';

export default function MessageItemComponent() {
  const photo =
    'https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
  return (
    <OpacityButton style={styles.container}>
      <View style={styles.profilePicWrapper}>
        <Image source={{uri: photo}} style={styles.profilePic} />
      </View>
      <View style={styles.infoWrapper}>
        <Text style={styles.txtName}>Phạm Đình Hiển</Text>
        <Text style={styles.txtMessage}>Ét ô ét</Text>
      </View>
      <Text style={styles.time}>Today</Text>
    </OpacityButton>
  );
}
