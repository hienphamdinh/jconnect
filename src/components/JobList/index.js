import React, {useCallback} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import ImageFast from 'components/ImageFast/index.js';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {timeFromNow} from 'utils/JobHelper/index.js';
import {useNavigation} from '@react-navigation/native';
import {TYPE_JOB_ACTION} from 'constants/TypeJobAction';
import Images from 'themes/Images.js';
import FastImage from 'react-native-fast-image';
import styles from './styles.js';
import get from 'lodash/get';
import Colors from 'themes/Colors.js';
import {WIDTH_RATIO} from 'themes/Dimens.js';

const JobItem = ({item, index, typeAction}) => {
  const navigation = useNavigation();
  const onItemPress = () => {
    navigation.navigate('JobDetailScreen', {
      jobId: get(item, '_id'),
      canApply: ![TYPE_JOB_ACTION.APPLY, TYPE_JOB_ACTION.POST].includes(
        get(typeAction, 'actionType'),
      ),
    });
  };

  const renderLeft = useCallback(() => {
    if (typeAction.actionType === TYPE_JOB_ACTION.DEFAULT) {
      return null;
    }
    const action = typeAction.action
      ? typeAction.action
      : ({item, index}) => {};

    return (
      <TouchableOpacity
        onPress={() => {
          action({item, index});
        }}>
        {[
          TYPE_JOB_ACTION.APPLY,
          TYPE_JOB_ACTION.POST,
          TYPE_JOB_ACTION.SAVE,
        ].includes(get(typeAction, 'actionType')) ? (
          <FontAwesome name="trash" color="red" size={25} />
        ) : (
          <FontAwesome name="bookmark-o" color="#ccc" size={20} />
        )}
      </TouchableOpacity>
    );
  }, [index, item, typeAction]);

  const renderApplyEntry = useCallback(() => {
    return (
      <TouchableOpacity
        style={styles.listApply}
        onPress={() => {
          navigation.navigate('ListApplicationScreen', {
            jobId: get(item, '_id'),
          });
        }}>
        <Text style={styles.listApplyText}>List application</Text>
        <FontAwesome
          name="eye"
          size={17 * WIDTH_RATIO}
          color={Colors.primary}
        />
      </TouchableOpacity>
    );
  }, [item, navigation]);

  return (
    <>
      <TouchableOpacity
        style={[
          styles.jobContainer,
          typeAction.actionType === TYPE_JOB_ACTION.POST && {
            marginBottom: 0,
          },
        ]}
        onPress={onItemPress}>
        <ImageFast
          source={{
            uri:
              get(item, 'thumbnail') ||
              'https://firebasestorage.googleapis.com/v0/b/jconnect-b2c5d.appspot.com/o/jconnect%2Fimages%2Fjconnect_logo.png?alt=media&token=d8bcd0e9-9887-49d4-8e71-9c90e8fd0929',
          }}
          style={styles.jobImage}
          imageStyle={styles.imageStyle}
        />
        <View style={styles.jobInfo}>
          <Text
            style={styles.jobCompany}
            numberOfLines={1}
            ellipsizeMode="tail">
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
        {renderLeft()}
      </TouchableOpacity>
      {typeAction.actionType === TYPE_JOB_ACTION.POST
        ? renderApplyEntry()
        : null}
    </>
  );
};

const JobList = ({
  data,
  style,
  typeAction = {
    actionType: TYPE_JOB_ACTION.DEFAULT,
    action: () => {},
  },
  ...otherProps
}) => {
  const renderItem = useCallback(
    ({item, index}) => {
      return <JobItem item={item} index={index} typeAction={typeAction} />;
    },
    [typeAction],
  );

  const listEmptyComponent = useCallback(
    () => (
      <View style={styles.nothingComponent}>
        <FastImage source={Images.Nothing} style={styles.nothingImg} />
        <Text style={styles.nothingText}>Jobs is empty</Text>
      </View>
    ),
    [],
  );
  return (
    <View style={[styles.container, style]}>
      <FlatList
        data={data}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
        ListEmptyComponent={listEmptyComponent}
        {...otherProps}
      />
    </View>
  );
};

export default JobList;
