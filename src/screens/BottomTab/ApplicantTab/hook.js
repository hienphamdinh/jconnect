import {useState, useEffect, useCallback, useRef} from 'react';
import {useNavigation} from '@react-navigation/native';
import {getAllUser} from 'store/user/service';
import debounce from 'lodash/debounce';
import get from 'lodash/get';
import {size} from 'lodash';

const useMessage = props => {
  const total = useRef(0);
  const navigation = useNavigation();
  const [listUser, setListUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [viewMore, setViewMore] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [refreshing, setRefreshing] = useState(false);

  const fetchAllUser = useCallback((searchString = '', skip = 0) => {
    setLoading(skip === 0);
    setViewMore(skip !== 0);
    getAllUser(searchString, skip)
      .then(res => {
        if (res.status) {
          setListUser(get(res, 'data', []));
          total.current = get(res, 'total');
        }
        setRefreshing(false);
        setLoading(false);
        setViewMore(false);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const onPressItem = useCallback(
    item => {
      navigation.navigate('MyProfileScreen', {
        id: get(item, '_id'),
      });
    },
    [navigation],
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceFetchUser = useCallback(
    debounce(text => fetchAllUser(text, 0), 1000),
    [],
  );

  const onEndReached = () => {
    if (!viewMore && size(listUser) < total.current) {
      fetchAllUser(searchText, size(listUser));
    }
  };

  const onSearch = text => {
    debounceFetchUser(text);
  };

  const onRefresh = () => {
    setRefreshing(true);
    fetchAllUser();
  };

  useEffect(() => {
    fetchAllUser();
  }, [fetchAllUser]);

  return {
    loading,
    viewMore,
    listUser,
    refreshing,
    onRefresh,
    onSearch,
    onPressItem,
    onEndReached,
  };
};

export default useMessage;
