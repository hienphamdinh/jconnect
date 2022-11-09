import {useState, useEffect, useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import {getAllMessage} from 'store/user/service';
import {useSelector} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';
import get from 'lodash/get';

const useMessage = props => {
  const isFocused = useIsFocused();
  const navigation = useNavigation();
  const userId = useSelector(state => get(state, 'user.info._id'));
  const [listMessage, setListMessage] = useState([]);

  const onPressItem = useCallback(
    item => {
      navigation.navigate('MessageDetailScreen', {
        userOther: get(item, 'userOther'),
      });
    },
    [navigation],
  );

  useEffect(() => {
    if (isFocused) {
      getAllMessage(userId)
        .then(res => {
          if (res.status) {
            setListMessage(get(res, 'data', []));
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, [userId, isFocused]);
  //  chỗ này k truyền deps vì để nó call api liên tục và nhận thông tin realtime

  return {
    listMessage,
    onPressItem,
  };
};

export default useMessage;
