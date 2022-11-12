import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import OpacityButton from 'components/OpacityButton';
import {WIDTH_RATIO} from 'themes/Dimens';
import AvatarComponent from 'components/AvatarComponent';
import {transferName} from 'utils/NameHelper';
import {useSelector} from 'react-redux';
import IconsIcons from 'react-native-vector-icons/Ionicons';
import get from 'lodash/get';
export default function HeaderBar({
  containerStyle,
  searchStyle,
  placeholder,
  onPress,
}) {
  const userInfo = useSelector(state => get(state, 'user.info'));

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.avatarWrapper}>
        <AvatarComponent source={{uri: get(userInfo, 'avatar')}} />
        <View style={styles.nameWrapper}>
          <Text style={styles.welcomeText}>Welcome,</Text>
          <Text style={styles.nameText}>
            {transferName(get(userInfo, 'fullName'))}
          </Text>
        </View>
        <View style={styles.divider} />
        {/* <View style={styles.notificationWrapper}>
          <IconsIcons name="notifications" color="white" size={28} />
          <View style={styles.dotStyle} />
        </View> */}
      </View>
      {/* <OpacityButton style={[styles.search, searchStyle]} onPress={onPress}>
        <Text style={styles.title}>{placeholder || 'Search...'}</Text>
        <AntDesign name={'search1'} size={25 * WIDTH_RATIO} />
      </OpacityButton> */}
    </View>
  );
}
