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
import {size, concat, filter} from 'lodash';

export default function SkillBlock(props) {
  const {isMe} = useIsMeHook();
  const {profile, updateUser} = props;
  const [openEdit, setOpenEdit] = useState(false);
  const [textInput, setTextInput] = useState('');
  const [skills, setSkills] = useState(get(profile, 'skills'));
  const [loading, setLoading] = useState(false);

  return (
    <BlockProfile>
      <Text style={styles.title}>Skills</Text>
      <View style={styles.aboutMeBlock}>
        {size(skills) ? (
          map(skills, (item, index) => (
            <View style={styles.skillWrapper} key={index.toString()}>
              <Text style={styles.skillText}>{item}</Text>
              {openEdit ? (
                <TouchableOpacity style={styles.removeItem}>
                  <AntDesignIcons
                    name="closecircle"
                    color={'red'}
                    size={15}
                    onPress={() => {
                      setSkills(prev =>
                        filter(prev, (subItem, i) => index !== i),
                      );
                    }}
                  />
                </TouchableOpacity>
              ) : null}
            </View>
          ))
        ) : (
          <Text style={styles.skillText}>No skills</Text>
        )}
      </View>

      {openEdit ? (
        <View style={styles.addSkills}>
          <TextInput
            value={textInput}
            style={styles.txtInput}
            onChangeText={text => {
              setTextInput(text);
            }}
          />
          <TouchableOpacity
            style={styles.addBtn}
            onPress={() => {
              setSkills(concat(textInput, skills));
              setTextInput('');
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
                skills: skills,
              },
              onSuccess: res => {
                setLoading(false);
                setOpenEdit(false);
                setSkills(get(res, 'user.skills'));
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
          <Text style={styles.addBioText}>Save skills</Text>
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
