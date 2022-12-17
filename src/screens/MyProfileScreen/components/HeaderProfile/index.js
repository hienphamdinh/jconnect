import Avatar from 'components/AvatarComponent';
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import get from 'lodash/get';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {USER_TYPE} from 'constants/Profile';
import {WIDTH_RATIO} from 'themes/Dimens';
import useIsMeHook from 'screens/globalHook/useIsMeHook';
import FastImage from 'react-native-fast-image';
import styles from './styles';

export default function HeaderProfile(props) {
  const navigation = useNavigation();
  const {isMe} = useIsMeHook();
  const {profile, isCompany} = props;
  return (
    <View style={styles.container}>
      <View style={styles.topHeaderBg}>
        <FastImage
          source={{
            uri:
              get(profile, 'avatar') ||
              'https://firebasestorage.googleapis.com/v0/b/jconnect-b2c5d.appspot.com/o/jconnect%2Fimages%2Fjconnect_logo.png?alt=media&token=d8bcd0e9-9887-49d4-8e71-9c90e8fd0929',
          }}
          style={styles.banner}
        />
      </View>
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
                : isCompany
                ? get(profile, 'company.website')
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
                : isCompany
                ? get(profile, 'city')
                : ''}
            </Text>
          </View>
          {isCompany ? (
            <View style={styles.jobProfile}>
              <AntDesignIcons
                name="idcard"
                size={16 * WIDTH_RATIO}
                style={styles.icon}
              />
              <Text style={styles.jobText}>
                {`Amount employee: ${get(profile, 'company.amountEmployee')}`}
              </Text>
            </View>
          ) : null}
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
