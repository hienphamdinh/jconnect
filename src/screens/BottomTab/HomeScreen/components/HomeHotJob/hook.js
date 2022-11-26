import {useCallback, useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import JobActions from 'store/job/action';
import {useIsFocused} from '@react-navigation/native';
import get from 'lodash/get';

const useHomeHook = () => {
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = useState(false);
  const hotJobs = useSelector(state => get(state, 'job.hotJobs'));

  const fetchListHotJob = useCallback(() => {
    dispatch(JobActions.getHotJob());
  }, [dispatch]);

  const onRefresh = () => {
    fetchListHotJob();
  };

  useEffect(() => {
    if (isFocused) {
      fetchListHotJob();
    }
  }, [fetchListHotJob, isFocused]);
  return {
    hotJobs,
    refreshing,
    onRefresh,
  };
};

export default useHomeHook;
