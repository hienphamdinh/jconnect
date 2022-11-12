import Avatar from 'components/AvatarComponent';
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import get from 'lodash/get';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {USER_TYPE} from 'constants/Profile';
import styles from './styles';
import {WIDTH_RATIO} from 'themes/Dimens';
import useIsMeHook from 'screens/globalHook/useIsMeHook';

export default function HeaderProfile(props) {
  const navigation = useNavigation();
  const {isMe} = useIsMeHook();
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
          <View style={styles.jobProfile}>
            <AntDesignIcons
              name="database"
              size={16 * WIDTH_RATIO}
              style={styles.icon}
            />
            <Text style={styles.jobText}>
              {get(profile, 'account.type') === USER_TYPE.NORMAL
                ? `${get(profile, 'mostRecentlyJob', '')}`
                : get(profile, 'account.type') === USER_TYPE.STUDENT
                ? 'Student'
                : ''}
            </Text>
          </View>
          <View style={styles.jobProfile}>
            <AntDesignIcons
              name="enviroment"
              size={16 * WIDTH_RATIO}
              style={styles.icon}
            />
            <Text style={styles.jobText}>
              {get(profile, 'account.type') === USER_TYPE.NORMAL
                ? `${get(profile, 'mostRecentlyCompany', '')}`
                : get(profile, 'account.type') === USER_TYPE.STUDENT
                ? get(profile, 'education.name')
                : ''}
            </Text>
          </View>
          {!isMe(get(profile, '_id')) ? (
            <TouchableOpacity
              style={styles.messageContainer}
              onPress={() => {
                navigation.navigate('MessageDetailScreen', {
                  userOther: profile,
                });
              }}>
              <AntDesignIcons name="message1" color={'white'} size={20} />
              <Text style={styles.messageText}>Message</Text>
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
    </View>
  );
}
