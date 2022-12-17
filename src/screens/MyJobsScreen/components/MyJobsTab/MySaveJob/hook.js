import {useState, useEffect, useCallback, useRef} from 'react';
import {mySavedJob} from 'store/job/service';
import {useSelector} from 'react-redux';
import get from 'lodash/get';
import size from 'lodash/size';
import {removeSave} from 'store/job/service';

export default function useApplyHook(props) {
  const activeTab = get(props, 'activeTab');
  const [listJob, setListJob] = useState([]);
  const userId = useSelector(state => get(state, 'user.info._id'));
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [viewMore, setViewMore] = useState(false);
  const total = useRef(0);

  const fetchData = useCallback(
    (skip = 0) => {
      setLoading(skip === 0);
      setViewMore(skip !== 0);
      mySavedJob(userId, skip)
        .then(res => {
          if (res.status) {
            setListJob(get(res, 'data'));
            total.current = get(res, 'total');
          }
        })
        .catch(err => {
          console.log('ERROR', err);
        })
        .finally(() => {
          setLoading(false);
          setRefreshing(false);
        });
    },
    [userId],
  );

  const onEndReached = () => {
    if (!viewMore && size(listJob) < total.current) {
      fetchData(size(listJob));
    }
  };

  const onRemoveSaved = ({item, index}) => {
    removeSave(userId, get(item, '_id')).then(res => {
      if (res.status) {
        fetchData(0);
      }
    });
  };

  const onRefresh = () => {
    setRefreshing(true);
    fetchData(0);
  };

  useEffect(() => {
    if (activeTab === 2) {
      fetchData(0);
    }
  }, [fetchData, activeTab]);

  return {
    listJob,
    loading,
    refreshing,
    onRefresh,
    onEndReached,
    onRemoveSaved,
  };
}
