import {useCallback, useEffect, useState} from 'react';
import {getNewsDetail} from 'store/user/service';
import get from 'lodash/get';

const useNewsHook = props => {
  const newsId = get(props, 'route.params.newsId');
  const [loading, setLoading] = useState(false);
  const [newsDetail, setNewsDetail] = useState();

  const fetchListNews = useCallback(() => {
    getNewsDetail(newsId)
      .then(res => {
        if (res.status) {
          setNewsDetail(get(res, 'news'));
        }
      })
      .catch(err => {
        console.log('ERROR', err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [newsId]);

  const onRefresh = () => {
    setLoading(true);
    fetchListNews();
  };

  useEffect(() => {
    setLoading(true);
    fetchListNews();
  }, [fetchListNews]);
  return {
    loading,
    newsDetail,
    onRefresh,
  };
};

export default useNewsHook;
