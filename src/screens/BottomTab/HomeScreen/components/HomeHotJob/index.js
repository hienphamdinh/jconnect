import React from 'react';
import {View} from 'react-native';
import JobList from 'components/JobList';
import useHomeHook from './hook';
import styles from './styles';

export default function HomeHotJob() {
  const {hotJobs} = useHomeHook();
  return (
    <View style={styles.container}>
      <JobList scrollEnabled={false} data={hotJobs} />
    </View>
  );
}
