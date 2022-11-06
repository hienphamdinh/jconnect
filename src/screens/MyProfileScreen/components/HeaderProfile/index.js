import Avatar from 'components/AvatarComponent';
import React from 'react';
import {View, Text} from 'react-native';
import get from 'lodash/get';
import styles from './styles';

export default function HeaderProfile(props) {
  const {profile} = props;
  return (
    <View style={styles.container}>
      <View style={styles.topHeaderBg} />
      <View style={styles.avtWrapper}>
        <Avatar
          source={{uri: get(profile, 'avatar')}}
          style={styles.avatarContainer}
          imageStyle={styles.avatar}
        />
        <Text style={styles.profileText}>{get(profile, 'fullName', '')}</Text>
      </View>
    </View>
  );
}
