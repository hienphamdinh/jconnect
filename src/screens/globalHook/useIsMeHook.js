import {useSelector} from 'react-redux';
import get from 'lodash/get';

const useIsMeHook = () => {
  const userId = useSelector(state => get(state, 'user.info._id'));
  const isMe = id => {
    return userId === id;
  };

  return {
    isMe,
  };
};

export default useIsMeHook;
