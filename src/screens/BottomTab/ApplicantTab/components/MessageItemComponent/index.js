import React from 'react';
import {View, Text, Image} from 'react-native';
import OpacityButton from 'components/OpacityButton';
import {timeFromNow} from 'utils/JobHelper';
import Avatar from 'components/AvatarComponent';
import styles from './styles';
import get from 'lodash/get';

export default function MessageItemComponent({item, index, onPress}) {
  return (
    <OpacityButton style={styles.container} onPress={onPress}>
      <Avatar
        source={{uri: get(item, 'userOther.avatar')}}
        style={[
          styles.profilePicWrapper,
          get(item, 'userOther.avatar') ? {} : styles.borderAvatar,
        ]}
        imageStyle={styles.profilePic}
      />
      <View style={styles.infoWrapper}>
        <Text style={styles.txtName}>
          {get(item, 'userOther.fullName', '')}
        </Text>
        <Text style={styles.txtMessage}>{get(item, 'closestMessage')}</Text>
      </View>
      <Text style={styles.time}>{timeFromNow(get(item, 'updatedAt'))}</Text>
    </OpacityButton>
  );
}
