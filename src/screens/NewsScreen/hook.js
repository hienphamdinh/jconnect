import {useCallback, useEffect, useState} from 'react';
import {getAllNews} from 'store/user/service';
import get from 'lodash/get';

const useNewsHook = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [listNews, setListNews] = useState([]);

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

    fetchListNews();
  };

  useEffect(() => {
    fetchListNews();
  }, [fetchListNews]);
  return {
    refreshing,
    listNews,
    onRefresh,
  };
};

export default useNewsHook;
