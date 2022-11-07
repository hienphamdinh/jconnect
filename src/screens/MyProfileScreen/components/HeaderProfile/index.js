import Avatar from 'components/AvatarComponent';
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import get from 'lodash/get';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

export default function HeaderProfile(props) {
  const navigation = useNavigation();
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
        <View style={styles.messageView}>
          <Text style={styles.profileText}>{get(profile, 'fullName', '')}</Text>
          <TouchableOpacity
            style={styles.messageContainer}
            onPress={() => {
              navigation.navigate('MessageDetailScreen', {
                userOther: profile,
              });
            }}>
            <AntDesignIcons name="message1" color={'white'} size={20} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
