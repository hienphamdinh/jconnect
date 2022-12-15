import {useState, useRef, useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import UserActions from 'store/user/action';
import {findJob} from 'store/job/service';
import debounce from 'lodash/debounce';
import concat from 'lodash/concat';
import get from 'lodash/get';
import size from 'lodash/size';
import slice from 'lodash/slice';
import {useNavigation} from '@react-navigation/native';

const useJobScreenHook = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const hotJobs = useSelector(state => get(state, 'job.hotJobs'));
  const historySearch = useSelector(state => get(state, 'user.recentlySearch'));
  const [listJob, setListJob] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(false);
  const [viewMore, setViewMore] = useState(false);
  const total = useRef(0);

  const fetchSearchData = (text, skip = 0) => {
    if (text) {
      setLoading(skip === 0);
      setViewMore(skip !== 0);
      findJob(text, skip).then(res => {
        if (res.status) {
          setListJob(get(res, 'data'));
          total.current = get(res, 'total');
        } else {
          setListJob([]);
        }
      });
    }
  };

  const fetchRecentlySearch = text => {
    if (text) {
      const newData = concat(
        [text],
        size(historySearch) > 0 ? historySearch[0] : [],
      );
      dispatch(UserActions.recentlySearch(newData));
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceSearch = useCallback(
    debounce(text => fetchSearchData(text, 0), 1000),
    [],
  );
  const debounceRecentlySearch = debounce(
    text => fetchRecentlySearch(text),
    1000,
  );

  const onSearch = text => {
    setSearchText(text);
    if (text) {
      debounceSearch(text);
      debounceRecentlySearch(text);
    }
  };

  const onPressItem = item => {
    if (item) {
      fetchSearchData(item, 0);
    }
    setSearchText(item);
  };

  const onEndReached = () => {
    if (!viewMore && size(listJob) <= total.current) {
      debounceSearch(searchText, size(listJob));
    }
  };

  const onClearSearch = () => {
    setSearchText('');
  };

  return {
    listJob,
    hotJobs: slice(hotJobs, 0, 6),
    searchText,
    onEndReached,
    onPressItem,
    onSearch,
    onClearSearch,
  };
};

export default useJobScreenHook;
