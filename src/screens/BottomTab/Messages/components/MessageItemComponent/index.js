import React from 'react';
import {View, Text, Image} from 'react-native';
import OpacityButton from 'components/OpacityButton';
import {timeFromNow} from 'utils/JobHelper';
import styles from './styles';
import get from 'lodash/get';

export default function MessageItemComponent({item, index, onPress}) {
  return (
    <OpacityButton style={styles.container} onPress={onPress}>
      <View style={styles.profilePicWrapper}>
        <Image
          source={{uri: get(item, 'userOther.avatar')}}
          style={styles.profilePic}
        />
      </View>
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
