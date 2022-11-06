import React from 'react';
import {View} from 'react-native';
import useApplyHook from './hook';
import JobList from 'components/JobList';
import {TYPE_JOB_ACTION} from 'constants/TypeJobAction';
import styles from './styles';
export default function MyApplyJob() {
  const {listJob, onDeleteApply, onEndReached} = useApplyHook();

  return (
    <View style={styles.container}>
      <JobList
        data={listJob}
        onReachEnd={onEndReached}
        typeAction={{
          actionType: TYPE_JOB_ACTION.APPLY,
          action: onDeleteApply,
        }}
      />
    </View>
  );
}
