import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ImageFast from 'components/ImageFast/index.js';
import get from 'lodash/get';
import styles from './styles.js';
import Container from 'components/Container/index.js';
import HTMLView from 'react-native-htmlview';
import {timeFromNow} from 'utils/JobHelper/index.js';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import IconIcons from 'react-native-vector-icons/Ionicons';
import useDetailHook from './hook.js';
import PrimaryButton from 'components/PrimaryButton/index.js';
import Fetching from 'components/Fetching';
import dayjs from 'dayjs';

const JobDetail = props => {
  const {
    jobDetail,
    canApply,
    isBookmarked,
    isMyJob,
    loading,
    onPressSavedJobs,
    onPressApply,
    onPressPostBy,
  } = useDetailHook(props);

  if (loading) {
    return <Fetching />;
  }

  const isExpired = dayjs(get(jobDetail, 'expiredApply')).diff(dayjs()) < 0;

  return (
    <Container style={styles.jobDetailContainer} showBack>
      <View style={styles.jobDetailContent}>
        <TouchableOpacity
          style={styles.jobDetailCircleContainer}
          onPress={onPressSavedJobs}>
          {isMyJob ? null : isBookmarked ? (
            <FontAwesome name="bookmark" color="#49AC5A" size={20} />
          ) : (
            <FontAwesome name="bookmark-o" color="#ccc" size={20} />
          )}
        </TouchableOpacity>

        <View style={styles.jobDetaiRow1}>
          <ImageFast
            source={{
              uri:
                get(jobDetail, 'thumbnail') ||
                'https://firebasestorage.googleapis.com/v0/b/jconnect-b2c5d.appspot.com/o/jconnect%2Fimages%2Fjconnect_logo.png?alt=media&token=d8bcd0e9-9887-49d4-8e71-9c90e8fd0929',
            }}
            style={styles.imgWrapper}
            imageStyle={styles.jobImage}
          />
          <Text style={styles.jobRole} numberOfLines={1} ellipsizeMode="tail">
            {get(jobDetail, 'jobName')}
          </Text>
          <View style={styles.jobInfoWrapper}>
            <View style={styles.infoItemWrapper}>
              <FontAwesomeIcons name="money" size={18} />
              <Text style={styles.jobCompany}>{` ${get(
                jobDetail,
                'salary',
              )}`}</Text>
            </View>
            <Text style={styles.divider}>|</Text>
            <View style={styles.infoItemWrapper}>
              <IconIcons name="cube-outline" size={18} />
              <Text style={styles.jobCompany}>{` ${get(
                jobDetail,
                'jobType',
              )}`}</Text>
            </View>
            <Text style={styles.divider}>|</Text>
            <Text style={styles.timeNow}>
              {timeFromNow(get(jobDetail, 'createAt'))}
            </Text>
          </View>
          <View>
            <View style={styles.flexRow}>
              <IconIcons name="film-outline" size={18} />
              <Text style={styles.jobLocation} numberOfLines={1}>
                {get(jobDetail, 'categories.title')}
              </Text>
            </View>
            <View style={styles.flexRow}>
              <IconIcons name="location" size={18} />
              <Text style={styles.jobLocation} numberOfLines={1}>
                {`${get(jobDetail, 'postedBy.address')} ${get(
                  jobDetail,
                  'postedBy.city',
                )}`}
              </Text>
            </View>
          </View>
          <View style={styles.timeWrapper}>
            <View style={styles.timeItem}>
              <Text style={styles.timeTitle}>Expired apply</Text>
              <Text style={[styles.timeNow, isExpired && styles.expired]}>
                {isExpired
                  ? `Expired: ${get(jobDetail, 'expiredApply')}`
                  : get(jobDetail, 'expiredApply')}
              </Text>
            </View>
            <View style={styles.timeDivider} />
            <TouchableOpacity style={styles.timeItem} onPress={onPressPostBy}>
              <Text style={styles.timeTitle}>By</Text>
              <Text style={styles.timeNow}>
                {get(jobDetail, 'postedBy.fullName')}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.jobDetailSection}>
            {get(jobDetail, 'description') ? (
              <>
                <Text style={styles.heading}>Job description</Text>
                <HTMLView value={get(jobDetail, 'description')} />
              </>
            ) : null}
            {get(jobDetail, 'requirement') ? (
              <>
                <Text style={styles.heading}>Job requirement</Text>
                <HTMLView value={get(jobDetail, 'requirement')} />
              </>
            ) : null}
          </View>
        </ScrollView>
        <View style={styles.bottomWrapper}>
          {canApply && !isMyJob && !isExpired ? (
            <PrimaryButton
              title={'Apply here'}
              customStyle={styles.applyHereBtn}
              onPress={onPressApply}
              renderRight={() => (
                <MaterialIcons
                  name="double-arrow"
                  color="#fff"
                  size={20}
                  style={styles.applyIcon}
                />
              )}
            />
          ) : null}
        </View>
      </View>
    </Container>
  );
};
export default JobDetail;
