import React from 'react';
import {Text, Image, TouchableOpacity, FlatList, View} from 'react-native';
import ImageFast from 'components/ImageFast/index.js';
import useCategories from './hook.js';
import styles from './styles.js';
import get from 'lodash/get';

const Item = ({item}) => {
  return (
    <TouchableOpacity style={[styles.categoryContainer]}>
      <View style={styles.categoryWrapper}>
        <ImageFast
          source={{uri: get(item, 'image')}}
          imageStyle={styles.categoryImage}
        />
      </View>
      <Text style={styles.categoryTitle}>{get(item, 'title')}</Text>
    </TouchableOpacity>
  );
};

const Categories = () => {
  const {categories} = useCategories();

  const renderItem = ({item, index}) => <Item item={item} index={index} />;
  return (
    <FlatList
      style={styles.list}
      contentContainerStyle={styles.contentContainerStyle}
      data={categories}
      horizontal
      renderItem={renderItem}
    />
  );
};

export default Categories;
