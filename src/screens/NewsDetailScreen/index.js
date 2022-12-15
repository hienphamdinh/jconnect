import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import ImageFast from 'components/ImageFast';
import styles from './styles';
import get from 'lodash/get';
import dayjs from 'dayjs';
import HeaderTitle from 'components/HeaderTitle';
import BackComponent from 'components/BackComponent';
import HTMLView from 'react-native-htmlview';
import useNewsHook from './hook';

export const NewsItem = ({item, index}) => {
  return (
    <TouchableOpacity style={styles.row}>
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

export default function HotNews(props) {
  const {loading, newsDetail, onRefresh} = useNewsHook(props);
  if (loading) {
    return null;
  }

  return (
    <View style={styles.container}>
      <BackComponent customStyle={styles.backBtn} iconColor="white" />
      <HeaderTitle title={'Detail'} style={styles.header} />
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <ImageFast
          imageStyle={styles.imageStyle}
          style={styles.jobImage}
          source={{
            uri:
              get(newsDetail, 'banner') ||
              'https://firebasestorage.googleapis.com/v0/b/jconnect-b2c5d.appspot.com/o/jconnect%2Fimages%2Fjconnect_logo.png?alt=media&token=d8bcd0e9-9887-49d4-8e71-9c90e8fd0929',
          }}
        />
        <Text style={styles.time}>
          {dayjs(get(newsDetail, 'createAt')).format('YYYY/MM/DD')}
        </Text>
        <Text style={styles.text} numberOfLines={2}>
          {get(newsDetail, 'title', '')}
        </Text>
        <HTMLView value={get(newsDetail, 'content')} />
      </ScrollView>
    </View>
  );
}
