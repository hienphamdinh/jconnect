import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import ImageFast from 'components/ImageFast';
import styles from './styles';
import map from 'lodash/map';

export const NewsItem = ({item, index}) => {
  return (
    <TouchableOpacity style={styles.row}>
      <View>
        <ImageFast
          imageStyle={styles.imageStyle}
          style={styles.jobImage}
          source={{
            uri: 'https://stellenticket.fu-berlin.de/p/header_fub.jpg',
          }}
        />
      </View>

      <View style={styles.wrapper}>
        <Text style={styles.time}>2019/20/11</Text>
        <Text style={styles.text} numberOfLines={2}>
          Anh em như thể tay chân nghĩa cùng một mẹ trong ngườn chày
          rafadfadfadfaafdfa
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default function HotNews({data}) {
  return (
    <View style={styles.container}>
      {map(data, (item, index) => (
        <NewsItem />
      ))}
    </View>
  );
}
