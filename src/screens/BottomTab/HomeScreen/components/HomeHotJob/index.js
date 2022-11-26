import React from 'react';
import {View, Text, RefreshControl} from 'react-native';
import JobList from 'components/JobList';
import useHomeHook from './hook';
import HomeBanner from '../HomeBanner';
import styles from './styles';

export default function HomeHotJob() {
  const {hotJobs, refreshing, onRefresh} = useHomeHook();
  return (
    <View style={styles.container}>
      <JobList
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        data={hotJobs}
        ListHeaderComponent={() => (
          <>
            <HomeBanner />
            <Text style={styles.hotJobTitle}>Hot jobs</Text>
          </>
        )}
      />
    </View>
  );
}
