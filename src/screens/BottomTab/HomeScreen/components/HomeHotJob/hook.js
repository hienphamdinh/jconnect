import {useCallback, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import JobActions from 'store/job/action';
import {useIsFocused} from '@react-navigation/native';
import get from 'lodash/get';

const useHomeHook = () => {
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const hotJobs = useSelector(state => get(state, 'job.hotJobs'));

  const fetchListHotJob = useCallback(() => {
    dispatch(JobActions.getHotJob());
  }, [dispatch]);

  useEffect(() => {
    if (isFocused) {
      fetchListHotJob();
    }
  }, [fetchListHotJob, isFocused]);
  return {
    hotJobs,
  };
};

export default useHomeHook;
