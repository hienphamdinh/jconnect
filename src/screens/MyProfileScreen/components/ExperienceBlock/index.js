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
import map from 'lodash/map';
import Colors from 'themes/Colors';
import useIsMeHook from 'screens/globalHook/useIsMeHook';
import {size, concat, filter, isEmpty} from 'lodash';
import Toast from 'react-native-toast-message';

export default function ExperienceBlock(props) {
  const {isMe} = useIsMeHook();
  const {profile, updateUser} = props;
  const [openEdit, setOpenEdit] = useState(false);
  const [companyName, setCompanyName] = useState('');
  const [position, setPosition] = useState('');
  const [experience, setExperience] = useState(get(profile, 'experiences'));
  const [loading, setLoading] = useState(false);

  return (
    <BlockProfile>
      <Text style={styles.title}>Experience</Text>
      <View style={styles.aboutMeBlock}>
        {size(experience) ? (
          map(experience, (item, index) => (
            <View
              style={[styles.skillWrapper, openEdit && styles.openEdit]}
              key={index.toString()}>
              <Text style={styles.positionText}>{get(item, 'position')}</Text>
              <Text style={styles.skillText}>{`At ${get(
                item,
                'companyName',
              )}`}</Text>
              {!openEdit && <View style={styles.hr} />}
              {openEdit ? (
                <TouchableOpacity style={styles.removeItem}>
                  <AntDesignIcons
                    name="closecircle"
                    color={'red'}
                    size={15}
                    onPress={() => {
                      setExperience(prev =>
                        filter(prev, (subItem, i) => index !== i),
                      );
                    }}
                  />
                </TouchableOpacity>
              ) : null}
            </View>
          ))
        ) : (
          <Text style={styles.skillText}>No experience</Text>
        )}
      </View>

      {openEdit ? (
        <View style={styles.addSkills}>
          <TextInput
            value={companyName}
            style={styles.txtInput}
            placeholder="Company name"
            onChangeText={text => {
              setCompanyName(text);
            }}
          />
          <TextInput
            value={position}
            style={styles.txtInput}
            placeholder="Position"
            onChangeText={text => {
              setPosition(text);
            }}
          />
          <TouchableOpacity
            style={styles.addBtn}
            onPress={() => {
              const check = filter(
                experience,
                (item, index) =>
                  get(item, 'companyName') === companyName &&
                  get(item, 'position') === position,
              );
              if (isEmpty(check)) {
                if (!isEmpty(companyName) && !isEmpty(position)) {
                  const experienceData = {
                    companyName,
                    position,
                  };
                  setExperience(concat(experienceData, experience));
                }
                setPosition('');
                setCompanyName('');
              } else {
                Toast.show({
                  type: 'failed',
                  text1: 'ERROR',
                  text2: 'This skill is added to list',
                });
              }
            }}>
            <Text style={styles.addText}>Add</Text>
          </TouchableOpacity>
        </View>
      ) : null}

      {openEdit ? (
        <TouchableOpacity
          style={styles.addBioWrapper}
          onPress={() => {
            setLoading(true);
            updateUser({
              data: {
                experiences: experience,
              },
              onSuccess: res => {
                setLoading(false);
                setOpenEdit(false);
                setExperience(get(res, 'user.experiences'));
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
          <Text style={styles.addBioText}>Save experience</Text>
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
