import React, {useCallback} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import ImageFast from 'components/ImageFast';
import styles from './styles';
import get from 'lodash/get';
import dayjs from 'dayjs';
import HeaderTitle from 'components/HeaderTitle';
import BackComponent from 'components/BackComponent';
import useNewsHook from './hook';
import {useNavigation} from '@react-navigation/native';

export const NewsItem = ({item, index}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.row}
      onPress={() => {
        navigation.navigate('NewsDetailScreen', {
          newsId: get(item, '_id'),
        });
      }}>
      <View>
        <ImageFast
          imageStyle={styles.imageStyle}
          style={styles.jobImage}
          source={{
            uri:
              get(item, 'banner') ||
              'https://firebasestorage.googleapis.com/v0/b/jconnect-b2c5d.appspot.com/o/jconnect%2Fimages%2Fjconnect_logo.png?alt=media&token=d8bcd0e9-9887-49d4-8e71-9c90e8fd0929',
          }}
        />
      </View>

      <View style={styles.wrapper}>
        <Text style={styles.time}>
          {dayjs(get(item, 'createAt')).format('YYYY/MM/DD')}
        </Text>
        <Text style={styles.text} numberOfLines={2}>
          {get(item, 'title', '')}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default function HotNews({}) {
  const {refreshing, listNews, onRefresh} = useNewsHook();

  const renderItem = useCallback(
    ({item, index}) => <NewsItem item={item} index={index} />,
    [],
  );

  return (
    <View>
      <BackComponent />
      <HeaderTitle title={'News'} style={styles.header} />
      <FlatList
        data={listNews}
        renderItem={renderItem}
        style={styles.container}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
      />
    </View>
  );
}
