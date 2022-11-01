import React, {useCallback} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import ImageFast from 'components/ImageFast/index.js';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {timeFromNow} from 'utils/JobHelper/index.js';
import {useNavigation} from '@react-navigation/native';
import styles from './styles.js';
import get from 'lodash/get';

const JobItem = ({item, index}) => {
  const navigation = useNavigation();
  const onItemPress = () => {
    navigation.navigate('JobDetailScreen', {
      jobId: get(item, '_id'),
    });
  };
  const isBookmarked = () => {
    return true;
  };

  return (
    <TouchableOpacity style={styles.jobContainer} onPress={onItemPress}>
      <ImageFast
        source={{uri: get(item, 'thumbnail')}}
        style={styles.jobImage}
        imageStyle={styles.imageStyle}
      />
      <View style={styles.jobInfo}>
        <Text style={styles.jobCompany} numberOfLines={1} ellipsizeMode="tail">
          {get(item, 'jobType')}
        </Text>
        <Text style={styles.jobRole} numberOfLines={1} ellipsizeMode="tail">
          {get(item, 'jobName')}
        </Text>

        <Text style={styles.jobSalary} numberOfLines={1} ellipsizeMode="tail">
          {get(item, 'city')}
        </Text>
        <Text style={styles.jobLocation} numberOfLines={1}>
          {timeFromNow(get(item, 'createAt'))}
        </Text>
      </View>
      {isBookmarked() ? (
        <FontAwesome name="bookmark" color="#ccc" size={20} />
      ) : (
        <FontAwesome name="bookmark-o" color="#ccc" size={20} />
      )}
    </TouchableOpacity>
  );
};

const JobList = ({data, ...otherProps}) => {
  const renderItem = useCallback(({item, index}) => {
    return <JobItem item={item} index={index} />;
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.titleBlock}>Hot jobs</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
        {...otherProps}
      />
    </View>
  );
};

export default JobList;
