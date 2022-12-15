import {useCallback, useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import JobActions from 'store/job/action';
import {getAllNews} from 'store/user/service';
import get from 'lodash/get';

const useHomeHook = () => {
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = useState(false);
  const [listNews, setListNews] = useState([]);
  const hotJobs = useSelector(state => get(state, 'job.hotJobs'));

  const fetchListHotJob = useCallback(() => {
    dispatch(JobActions.getHotJob());
    setRefreshing(false);
  }, [dispatch]);

  const fetchListNews = useCallback(() => {
    getAllNews()
      .then(res => {
        if (res.status) {
          setListNews(get(res, 'data'));
        }
      })
      .catch(err => {
        console.log('ERROR', err.message);
      })
      .finally(() => {
        setRefreshing(false);
      });
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    fetchListHotJob();
    fetchListNews();
  };

  useEffect(() => {
    fetchListHotJob();
    fetchListNews();
  }, [fetchListHotJob, fetchListNews]);
  return {
    hotJobs,
    refreshing,
    listNews,
    onRefresh,
  };
};

export default useHomeHook;
