import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import BlockProfile from '../BlockProfile';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import {WIDTH_RATIO} from 'themes/Dimens';
import get from 'lodash/get';
import Colors from 'themes/Colors';
import useIsMeHook from 'screens/globalHook/useIsMeHook';
import {isEmpty} from 'lodash';

export default function AboutMe(props) {
  const {profile, updateUser} = props;
  const {isMe} = useIsMeHook();
  const [openEdit, setOpenEdit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [aboutMe, setAboutMe] = useState(get(profile, 'bio'));

  return (
    <BlockProfile>
      <View style={styles.aboutMeBlock}>
        <Text style={styles.title}>About me</Text>
        {!openEdit ? (
          <Text>
            {!isEmpty(get(profile, 'bio'))
              ? get(profile, 'bio', 'No information')
              : 'No information'}
          </Text>
        ) : null}
      </View>

      {openEdit ? (
        <View style={styles.aboutMeEdit}>
          <TextInput
            style={styles.input}
            multiline
            value={aboutMe}
            maxLength={200}
            textAlignVertical="top"
            onChangeText={text => {
              setAboutMe(text);
            }}
          />
        </View>
      ) : (
        false
      )}

      {openEdit ? (
        <TouchableOpacity
          style={styles.addBioWrapper}
          onPress={() => {
            setLoading(true);
            updateUser({
              data: {
                bio: aboutMe,
              },
              onSuccess: res => {
                setLoading(false);
                setOpenEdit(false);
                setAboutMe(get(res, 'user.bio'));
              },
              onFailed: () => {
                setLoading(false);
              },
            });
          }}>
          {loading ? (
            <ActivityIndicator color={'white'} />
          ) : (
            <AntDesignIcons
              name="save"
              size={15 * WIDTH_RATIO}
              color={Colors.white}
            />
          )}
          <Text style={styles.addBioText}>Save</Text>
        </TouchableOpacity>
      ) : null}

      {isMe(get(profile, '_id')) ? (
        <TouchableOpacity
          style={styles.editBtn}
          onPress={() => {
            setOpenEdit(true);
          }}>
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
