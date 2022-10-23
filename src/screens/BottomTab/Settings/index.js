import React from 'react';
import {View, Image, Text, FlatList} from 'react-native';
import Container from 'components/Container';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {WIDTH_RATIO} from 'themes/Dimens';
import SettingItemComponent from './components/SettingItemComponent';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import UserActions from 'store/user/action';
import styles from './styles';

export default function Settings() {
  const insets = useSafeAreaInsets();
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
  const photo =
    'https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';

  const data = [
    {
      title: 'My profile',
      icon: 'user',
      navigateScreen: '',
    },
    {
      title: 'Change password',
      icon: 'lock1',
      navigateScreen: '',
    },
    {
      title: 'Language',
      icon: 'minussquareo',
      navigateScreen: '',
    },
    {
      title: 'Term of use',
      icon: 'creditcard',
      navigateScreen: '',
    },
    {
      title: 'Language',
      icon: 'minussquareo',
      navigateScreen: '',
    },
    {
      title: 'Service',
      icon: 'customerservice',
      navigateScreen: '',
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
      <View
        style={[
          styles.header,
          {
            height: (insets.top + 130) * WIDTH_RATIO,
          },
        ]}>
        <Image source={{uri: photo}} style={styles.iconWrapper} />
        <Text style={styles.textName}>Phạm Đình Hiển</Text>
      </View>
      <View style={styles.content}>
        <FlatList data={data} renderItem={renderItem} />
      </View>
    </Container>
  );
}
