import {useState, useEffect, useCallback, useRef} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {getAllUser} from 'store/user/service';
import debounce from 'lodash/debounce';
import get from 'lodash/get';
import size from 'lodash/size';
import filter from 'lodash/filter';
import useCompanyHooks from 'hooks/useCompanyHook';

const useMessage = props => {
  const {isCompany} = useCompanyHooks();
  const total = useRef(0);
  const navigation = useNavigation();
  const userId = useSelector(state => get(state, 'user.info._id'));
  const [listUser, setListUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [viewMore, setViewMore] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [refreshing, setRefreshing] = useState(false);

  const fetchAllUser = useCallback(
    (searchString = '', skip = 0) => {
      setViewMore(skip !== 0);
      getAllUser(searchString, skip, isCompany ? 'company' : 'none')
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
    },
    [isCompany],
  );

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
    setSearchText(text);
  };

  const onRefresh = () => {
    setRefreshing(true);
    fetchAllUser();
  };

  useEffect(() => {
    setLoading(true);
    fetchAllUser();
  }, [fetchAllUser]);

  return {
    isCompany,
    loading,
    viewMore,
    listUser: filter(listUser, (item, index) => get(item, '_id') !== userId),
    refreshing,
    onRefresh,
    onSearch,
    onPressItem,
    onEndReached,
  };
};

export default useMessage;
