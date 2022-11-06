import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import OpacityButton from 'components/OpacityButton';
import {WIDTH_RATIO} from 'themes/Dimens';
import {useSelector} from 'react-redux';
import Avatar from 'components/AvatarComponent';
import get from 'lodash/get';
export default function NormalHeaderBar({
  containerStyle,
  searchStyle,
  onPress,
}) {
  const userInfo = useSelector(state => get(state, 'user.info'));
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.avatarHeader}>
        <Avatar
          source={{uri: get(userInfo, 'avatar')}}
          style={styles.imgStyle}
          imageStyle={styles.imageStyle}
        />
        <Text style={styles.titleHeader}>Conversations</Text>
      </View>
      <OpacityButton style={[styles.search, searchStyle]} onPress={onPress}>
        <TextInput style={styles.title} placeholder="Search conversation" />
        <AntDesign name={'search1'} size={25 * WIDTH_RATIO} />
      </OpacityButton>
    </View>
  );
}
