import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {USER_TYPE} from 'constants/Profile';
import BlockProfile from '../BlockProfile';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import {WIDTH_RATIO} from 'themes/Dimens';
import get from 'lodash/get';
import Colors from 'themes/Colors';
import useIsMeHook from 'screens/globalHook/useIsMeHook';

export default function AboutMe(props) {
  const {isMe} = useIsMeHook();
  const navigation = useNavigation();
  const {profile} = props;

  return (
    <BlockProfile>
      <View style={styles.aboutMeBlock}>
        <Text style={styles.title}>About me</Text>
        <Text>{get(profile, 'bio', 'No infomation')}</Text>
      </View>

      {isMe(get(profile, '_id')) ? (
        <TouchableOpacity style={styles.addBioWrapper}>
          <AntDesignIcons
            name="pluscircle"
            size={15 * WIDTH_RATIO}
            color={Colors.white}
          />
          <Text style={styles.addBioText}>Add bio</Text>
        </TouchableOpacity>
      ) : null}

      {isMe(get(profile, '_id')) ? (
        <TouchableOpacity style={styles.editBtn}>
          <AntDesignIcons
            name="edit"
            size={20 * WIDTH_RATIO}
            color={Colors.primary}
          />
        </TouchableOpacity>
      ) : null}
    </BlockProfile>
  );
}
