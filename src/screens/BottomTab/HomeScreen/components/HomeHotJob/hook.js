import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import JobActions from 'store/job/action';
import get from 'lodash/get';

const useHomeHook = () => {
  const dispatch = useDispatch();
  const hotJobs = useSelector(state => get(state, 'job.hotJobs'));
  const fetchListHotJob = () => {
    dispatch(JobActions.getHotJob());
  };

  useEffect(() => {
    fetchListHotJob();
  });
  return {
    hotJobs,
  };
};

export default useHomeHook;
