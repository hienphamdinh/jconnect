import React from 'react';
import {View, RefreshControl} from 'react-native';
import useApplyHook from './hook';
import JobList from 'components/JobList';
import {TYPE_JOB_ACTION} from 'constants/TypeJobAction';
import Fetching from 'components/Fetching';
import styles from './styles';

export default function MyApplyJob(props) {
  const {listJob, loading, refreshing, onRefresh, onEndReached, onRemoveApply} =
    useApplyHook(props);

  if (loading) {
    return <Fetching />;
  }

  return (
    <View style={styles.container}>
      <JobList
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        data={listJob}
        onReachEnd={onEndReached}
        typeAction={{
          actionType: TYPE_JOB_ACTION.APPLY,
          action: onRemoveApply,
        }}
      />
    </View>
  );
}
