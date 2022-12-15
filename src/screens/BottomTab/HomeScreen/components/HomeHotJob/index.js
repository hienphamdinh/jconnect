import React from 'react';
import {View, Text, RefreshControl, Pressable} from 'react-native';
import JobList from 'components/JobList';
import useHomeHook from './hook';
import HomeBanner from '../HomeBanner';
import HomeNews from '../HotNews';
import {useNavigation} from '@react-navigation/native';
import slice from 'lodash/slice';
import styles from './styles';

export default function HomeHotJob() {
  const navigation = useNavigation();
  const {hotJobs, refreshing, onRefresh} = useHomeHook();
  return (
    <JobList
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      data={slice(hotJobs, 0, 2)}
      ListHeaderComponent={() => (
        <>
          <HomeBanner />
          <View style={styles.row}>
            <Text style={styles.hotJobTitle}>Hot jobs</Text>
            <Pressable
              onPress={() => {
                navigation.navigate('JobScreen');
              }}>
              <Text style={styles.more}>More</Text>
            </Pressable>
          </View>
        </>
      )}
      ListFooterComponent={() => (
        <>
          <View style={styles.row}>
            <Text style={styles.hotJobTitle}>News</Text>
            <Pressable
              onPress={() => {
                navigation.navigate('NewsScreen');
              }}>
              <Text style={styles.more}>More</Text>
            </Pressable>
          </View>
          {/*
lấy tin tức ngoài hook của tk jobs luôn xong truyền vào*/}
          <HomeNews data={[1, 2]} />
        </>
      )}
    />
  );
}
