import {useState, useEffect, useCallback, useRef} from 'react';
import {myPostedJob} from 'store/job/service';
import {useSelector} from 'react-redux';
import get from 'lodash/get';
import size from 'lodash/size';
import {removePosted} from 'store/job/service';
import {filter} from 'lodash';

export default function useApplyHook(props) {
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

  useEffect(() => {
    fetchData(0);
  }, [fetchData]);

  return {
    listJob: filter(listJob, (item, index) => item?.status === 'on'),
    refreshing,
    loading,
    onRefresh,
    onRemovePosted,
    onEndReached,
  };
}
