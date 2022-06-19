import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import OpacityButton from 'components/OpacityButton';
import {WIDTH_RATIO} from 'themes/Dimens';
export default function JConnectHeader({
  containerStyle,
  searchStyle,
  placeholder,
  onPress,
}) {
  const photo =
    'https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
  return (
    <View style={[styles.container, containerStyle]}>
      {/* <View style={styles.container}> */}
      <View style={styles.profilePicWrapper}>
        <Image source={{uri: photo}} style={styles.profilePic} />
        {/* </View> */}
      </View>
      <OpacityButton style={[styles.search, searchStyle]} onPress={onPress}>
        <Text style={styles.title}>{placeholder || 'Search...'}</Text>
        <AntDesign name={'search1'} size={25 * WIDTH_RATIO} />
      </OpacityButton>
    </View>
  );
}
