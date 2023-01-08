import {useState, useEffect, useCallback, useRef} from 'react';
import {myPostedJob} from 'store/job/service';
import {useSelector} from 'react-redux';
import get from 'lodash/get';
import size from 'lodash/size';
import {removePosted} from 'store/job/service';
import {updateJob} from 'store/job/service';
import Toast from 'react-native-toast-message';

export default function useApplyHook(props) {
  const forceCall = get(props, 'forceCall');
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
      myPostedJob(userId, skip)
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
          setRefreshing(false);
          setLoading(false);
        });
    },
    [userId],
  );

  const onEndReached = () => {
    if (!viewMore && size(listJob) < total.current) {
      fetchData(size(listJob));
    }
  };

  const onRemovePosted = ({item, index}) => {
    removePosted(userId).then(res => {
      if (res.status) {
        fetchData(0);
      }
    });
  };

  const onRefresh = () => {
    setRefreshing(true);
    fetchData(0);
  };

  const offJobAction = useCallback(
    item => {
      if (!item) {
        return;
      }
      const itemStatus = get(item, 'status');
      updateJob(get(item, '_id'), {
        status: itemStatus === 'on' ? 'invisible' : 'on',
      })
        .then(response => {
          if (response.status) {
            Toast.show({
              text1: 'Success',
              text2: 'Updated job status',
              type: 'done',
            });
            fetchData();
          }
        })
        .catch(error => {
          console.log('ERROR', error?.message);
        })
        .finally(() => {});
    },
    [fetchData],
  );

  useEffect(() => {
    if (activeTab === 1) {
      fetchData(0);
    }
  }, [fetchData, activeTab]);

  useEffect(() => {
    if (forceCall) {
      fetchData(0);
    }
  }, [fetchData, forceCall]);

  return {
    listJob,
    refreshing,
    loading,
    onRefresh,
    onRemovePosted,
    onEndReached,
    offJobAction,
  };
}
