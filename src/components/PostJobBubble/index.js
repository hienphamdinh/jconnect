import React from 'react';
import {Pressable} from 'react-native';
import Bubble from 'components/Bubble';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {WIDTH_RATIO} from 'themes/Dimens';
import Colors from 'themes/Colors';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import get from 'lodash/get';

export default function PostJobBubble() {
  const navigation = useNavigation();
  const userType = useSelector(state => get(state, 'user.info.account.type'));

  return userType === 'company' ? (
    <Bubble
      buttonHeight={50 * WIDTH_RATIO}
      buttonWidth={50 * WIDTH_RATIO}
      initialPositionHeight={0.75}>
      <Pressable
        style={[styles.addJobs]}
        onPress={() => {
          navigation.navigate('PostJobScreen');
        }}>
        <Ionicons name="add-circle" size={25} color={Colors.primary} />
      </Pressable>
    </Bubble>
  ) : null;
}
