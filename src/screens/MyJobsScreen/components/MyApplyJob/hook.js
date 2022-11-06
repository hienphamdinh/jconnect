import {useState, useEffect, useCallback, useRef} from 'react';
import {myApplyJob} from 'store/job/service';
import {useSelector} from 'react-redux';
import get from 'lodash/get';
import size from 'lodash/size';
import {removeApply} from 'store/job/service';

export default function useApplyHook() {
  const [listJob, setListJob] = useState([]);
  const userId = useSelector(state => get(state, 'user.info._id'));
  const [loading, setLoading] = useState(false);
  const [viewMore, setViewMore] = useState(false);
  const total = useRef(0);

  const fetchData = useCallback(
    (skip = 0) => {
      setLoading(loading === 0);
      setViewMore(skip !== 0);
      myApplyJob(userId, skip)
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

  const onDeleteApply = ({item, index}) => {
    removeApply(userId, get(item, '_id')).then(res => {
      if (res.status) {
        fetchData(0);
      }
    });
  };

  useEffect(() => {
    fetchData(0);
  }, [fetchData]);

  return {
    listJob,
    onEndReached,
    onDeleteApply,
  };
}
