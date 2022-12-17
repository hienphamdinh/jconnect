import React from 'react';
import {View, Text} from 'react-native';
import JobList from 'components/JobList';
import useMyPostedJobs from './hook';
import styles from './styles';

export default function AboutMe(props) {
  const {listJob} = useMyPostedJobs(props);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Job posted</Text>
      <JobList data={listJob} scrollEnable={false} />
    </View>
  );
}
