import {useState, useEffect, useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  getAllMessage,
  userDeleteMessage,
  userClearMessage,
} from 'store/user/service';
import {useSelector} from 'react-redux';
import get from 'lodash/get';
import {useIsFocused} from '@react-navigation/native';

const useMessage = props => {
  const isFocused = useIsFocused();
  const navigation = useNavigation();
  const userId = useSelector(state => get(state, 'user.info._id'));
  const [loading, setLoading] = useState(false);
  const [listMessage, setListMessage] = useState([]);
  const [isShowDelete, setIsShowDelete] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const getListMessage = useCallback(() => {
    setLoading(true);
    getAllMessage(userId)
      .then(res => {
        if (res.status) {
          setListMessage(get(res, 'data', []));
        }
        setRefreshing(false);
        setLoading(false);
      })
      .catch(error => {
        setRefreshing(false);
        console.log(error);
      });
  }, [userId]);

  const onPressItem = useCallback(
    item => {
      navigation.navigate('MessageDetailScreen', {
        userOther: get(item, 'userOther'),
      });
    },
    [navigation],
  );

  const onSearch = () => {};

  const onLongPressItem = () => {
    setIsShowDelete(true);
  };

  const onCloseModalDelete = () => {
    setIsShowDelete(false);
  };

  const onDeleteMessage = item => {
    userDeleteMessage(get(item, '_id'))
      .then(res => {
        if (res.status) {
          getListMessage();
        }
      })
      .catch(error => {
        console.log(error);
      });
    setIsShowDelete(false);
  };

  const onClearMessage = item => {
    userClearMessage(get(item, '_id'))
      .then(res => {
        if (res.status) {
          getListMessage();
        }
      })
      .catch(error => {
        console.log(error);
      });
    setIsShowDelete(false);
  };

  const onRefresh = () => {
    setRefreshing(true);
    getListMessage();
  };

  useEffect(() => {
    if (isFocused) {
      getListMessage();
    }
  }, [getListMessage, isFocused]);
  //  chỗ này k truyền deps vì để nó call api liên tục và nhận thông tin realtime

  return {
    listMessage: listMessage ? listMessage?.reverse() : [],
    isShowDelete,
    refreshing,
    loading,
    onRefresh,
    onDeleteMessage,
    onCloseModalDelete,
    onLongPressItem,
    onSearch,
    onPressItem,
    onClearMessage,
  };
};

export default useMessage;
