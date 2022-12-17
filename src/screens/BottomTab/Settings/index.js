import React, {useCallback} from 'react';
import {View, Text, FlatList} from 'react-native';
import Container from 'components/Container';
import SettingItemComponent from './components/SettingItemComponent';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import UserActions from 'store/user/action';
import get from 'lodash/get';
import {useSelector} from 'react-redux';
import Avatar from 'components/AvatarComponent';
import styles from './styles';
import {updateUser} from 'store/user/service';
import useCompanyHooks from 'hooks/useCompanyHook';
import dayjs from 'dayjs';

export default function Settings() {
  const {isCompany} = useCompanyHooks();
  const user = useSelector(state => get(state, 'user.info'));
  const userId = useSelector(state => get(state, 'user.info._id'));
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const updateUserActive = useCallback(
    (data = {}) => {
      if (userId) {
        updateUser(userId, data);
      }
    },
    [userId],
  );

  const onSuccess = () => {
    navigation.reset({
      index: 0,
      routes: [
        {
          name: 'AuthenticationStack',
        },
      ],
    });
  };

  const data = [
    {
      title: 'My profile',
      icon: 'user',
      navigateScreen: '',
      onPress: () => {
        navigation.navigate('MyProfileScreen', {
          id: get(user, '_id'),
        });
      },
    },
    {
      title: 'Update my profile',
      icon: 'edit',
      navigateScreen: '',
      onPress: () => {
        if (isCompany) {
          navigation.navigate('UpdateCompanyInfoScreen');
        } else {
          navigation.navigate('UpdateInfoScreen');
        }
      },
    },
    {
      title: 'Change password',
      icon: 'scan1',
      navigateScreen: '',
      onPress: () => {
        navigation.navigate('ChangePasswordScreen');
      },
    },
    {
      title: 'Log out',
      icon: 'customerservice',
      navigateScreen: '',
      onPress: () => {
        updateUserActive({
          justNow: 'off',
          timeOff: dayjs().toISOString(),
        });
        dispatch(UserActions.logout(onSuccess));
      },
    },
  ];

  const renderItem = ({item, index}) => <SettingItemComponent item={item} />;

  return (
    <Container notSafeArea style={styles.container}>
      <View style={[styles.header]}>
        <Avatar
          style={styles.iconWrapper}
          imageStyle={styles.imageStyle}
          source={{uri: get(user, 'avatar')}}
          sizeIcon={60}
        />
        <Text style={styles.textName}>{get(user, 'fullName')}</Text>
      </View>
      <View style={styles.content}>
        <FlatList style={styles.list} data={data} renderItem={renderItem} />
      </View>
    </Container>
  );
}
