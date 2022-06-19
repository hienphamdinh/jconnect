import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
export default function SearchBar() {
  const photo =
    'https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
  return (
    <View style={styles.container}>
      <View style={styles.profilePicWrapper}>
        <Image source={{uri: photo}} style={styles.profilePic} />
      </View>
    </View>
  );
}
