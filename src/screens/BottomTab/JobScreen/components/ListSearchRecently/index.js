import {View, Text, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import get from 'lodash/get';
import React from 'react';
import map from 'lodash/map';
import size from 'lodash/size';
import styles from './styles';

export default function ListSearchRecently({onPressItem}) {
  const historySearch = useSelector(state => get(state, 'user.recentlySearch'));
  return size(historySearch) ? (
    <View style={styles.container}>
      <Text style={styles.titleSearch}>Recently search</Text>
      {map(historySearch, (item, index) => (
        <TouchableOpacity
          key={index.toString()}
          style={styles.itemContainer}
          onPress={() => onPressItem(item)}>
          <Text style={styles.textSearch}>{`# ${item}`}</Text>
        </TouchableOpacity>
      ))}
    </View>
  ) : null;
}
