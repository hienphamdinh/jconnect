import React from 'react';
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

export default function Settings() {
  const user = useSelector(state => get(state, 'user.info'));
  const navigation = useNavigation();
  const dispatch = useDispatch();

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
        navigation.navigate('MyProfileScreen', {
          id: get(user, '_id'),
        });
      },
    },
    {
      title: 'Log out',
      icon: 'customerservice',
      navigateScreen: '',
      onPress: () => {
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
        />
        <Text style={styles.textName}>{get(user, 'fullName')}</Text>
      </View>
      <View style={styles.content}>
        <FlatList style={styles.list} data={data} renderItem={renderItem} />
      </View>
    </Container>
  );
}
