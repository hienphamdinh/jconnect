import {useState, useEffect, useCallback, useRef} from 'react';
import {myPostedJob} from 'store/job/service';
import {useSelector} from 'react-redux';
import get from 'lodash/get';
import size from 'lodash/size';
import {removePosted} from 'store/job/service';

export default function useApplyHook(props) {
  const activeTab = get(props, 'activeTab');
  const [listJob, setListJob] = useState([]);
  const userId = useSelector(state => get(state, 'user.info._id'));
  const [loading, setLoading] = useState(false);
  const [viewMore, setViewMore] = useState(false);
  const total = useRef(0);

  const fetchData = useCallback(
    (skip = 0) => {
      setLoading(loading === 0);
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
        });
    },
    [loading, userId],
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

  useEffect(() => {
    if (activeTab === 1) {
      fetchData(0);
    }
  }, [fetchData, activeTab]);

  return {
    listJob,
    onEndReached,
    onRemovePosted,
  };
}
