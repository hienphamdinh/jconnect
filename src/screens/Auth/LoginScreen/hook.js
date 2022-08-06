import AuthActions from 'store/auth/action';
import {useDispatch} from 'react-redux';

const useLoginHook = props => {
  const dispatch = useDispatch();

  const onPressLogin = () => {
    dispatch(AuthActions.login('0971108618'));
  };

  return {
    onPressLogin,
  };
};
export default useLoginHook;
