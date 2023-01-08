import {useState, useEffect, useRef} from 'react';
import {useNavigation} from '@react-navigation/native';
import {userMessage, userSendMessage} from 'store/user/service';
import {useSelector} from 'react-redux';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';

const useMessageDetail = props => {
  const messageId = useRef();
  const userId = useSelector(state => get(state, 'user.info._id'));
  const userOther = get(props, 'route.params.userOther');
  const [listMessage, setListMessage] = useState([]);
  const [message, setMessage] = useState('');
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  const onChangeText = text => {
    setMessage(text);
  };

  const onSend = () => {
    if (!isEmpty(message)) {
      userSendMessage(messageId.current, userId, message)
        .then(res => {
          setListMessage(get(res, 'data.message', []).reverse());
          messageId.current = get(res, 'data._id');
          setMessage('');
        })
        .catch(error => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    userMessage(userId, get(userOther, '_id'))
      .then(res => {
        if (res.status) {
          setListMessage(get(res, 'data.message', []).reverse());
          messageId.current = get(res, 'data._id');
        }
      })
      .catch(error => {
        console.log(error);
      });
  });
  // }, [userId, userOther]);

  return {
    userOther,
    listMessage,
    message,
    userId,
    onChangeText,
    goBack,
    onSend,
  };
};

export default useMessageDetail;
