import React from 'react';
import {View, Image, Text, FlatList} from 'react-native';
import Container from 'components/Container';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {WIDTH_RATIO} from 'themes/Dimens';
import SettingItemComponent from './components/SettingItemComponent';
import styles from './styles';

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
];
export default function Settings() {
  const insets = useSafeAreaInsets();
  const photo =
    'https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';

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
