import React, {useCallback} from 'react';
import {View, Text, FlatList} from 'react-native';
import Avatar from 'components/AvatarComponent';
import PrimaryButton from 'components/PrimaryButton';
import {USER_TYPE} from 'constants/Profile';
import styles from './styles';
import get from 'lodash/get';
import FastImage from 'react-native-fast-image';
import Images from 'themes/Images';

const Item = ({item, index, onPressViewResume, onPressViewProfile}) => {
  const isStudent = get(item, 'applicant.account.type') === USER_TYPE.STUDENT;

  return (
    <View style={styles.itemContainer}>
      <View style={styles.item}>
        <Avatar source={{uri: get(item, 'applicant.avatar')}} />
        <View style={styles.nameInfo}>
          <Text style={styles.applicationName}>
            {get(item, 'applicant.fullName')}
          </Text>
          <Text>
            {isStudent ? 'Student' : get(item, 'applicant.mostRecentlyJob')}
          </Text>
          <Text style={styles.position}>
            {`At ${
              isStudent
                ? get(item, 'applicant.education.name')
                : get(item, 'applicant.mostRecentlyCompany')
            }`}
          </Text>
        </View>
      </View>
      <View style={styles.btnContainer}>
        <PrimaryButton
          customStyle={styles.btnWrapper}
          textStyle={styles.textStyle}
          title={'View resume'}
          onPress={onPressViewResume}
        />
        <View style={styles.btnDivider} />
        <PrimaryButton
          customStyle={styles.btnWrapper}
          textStyle={styles.textStyle}
          title={'Profile'}
          onPress={onPressViewProfile}
        />
      </View>
    </View>
  );
};

export default function ApplicationList({
  data,
  onPressViewResume,
  onPressViewProfile,
  ...otherProps
}) {
  const renderItem = useCallback(
    ({item, index}) => (
      <Item
        item={item}
        index={index}
        onPressViewResume={() => onPressViewResume(item)}
        onPressViewProfile={() => onPressViewProfile(item)}
      />
    ),
    [onPressViewProfile, onPressViewResume],
  );
  const listEmptyComponent = useCallback(
    () => (
      <View style={styles.nothingComponent}>
        <FastImage source={Images.Nothing} style={styles.nothingImg} />
        <Text style={styles.nothingText}>Applicants is empty</Text>
      </View>
    ),
    [],
  );
  return (
    <View>
      <FlatList
        style={styles.list}
        contentContainerStyle={styles.contentContainerStyle}
        data={data}
        renderItem={renderItem}
        ListEmptyComponent={listEmptyComponent}
        {...otherProps}
      />
    </View>
  );
}
