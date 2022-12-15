import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import UserActions from 'store/user/action';

const useLoginHook = props => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loading, setLoading] = useState(false);

  const onSuccess = response => {
    setLoading(false);
    navigation.reset({
      index: 0,
      routes: [
        {
          name: 'BottomTabNavigator',
        },
      ],
    });
  };
  const onFailed = response => {
    setLoading(false);
    setPasswordError(response?.message);
  };

  const onChangeEmail = text => {
    setEmail(text);
    setEmailError('');
    setPasswordError('');
  };

  const onChangePassword = text => {
    setPassword(text);
    setEmailError('');
    setPasswordError('');
  };
  const onClearEmail = text => {
    setEmail('');
  };

  const onClearPassword = text => {
    setPassword('');
  };

  const onPressCreateAccount = () => {
    navigation.navigate('EnterEmailScreen', {
      type: 'normal',
    });
  };

  const onPressCreateAccountRecruiter = () => {
    navigation.navigate('EnterEmailScreen', {
      type: 'company',
    });
  };

  const onPressLogin = () => {
    if (!email) {
      setEmailError('Please enter email');
      return;
    }
    if (!password) {
      setPasswordError('Please enter password');
      return;
    }
    setLoading(true);
    dispatch(UserActions.login(email, password, onSuccess, onFailed));
  };

  return {
    loading,
    email,
    emailError,
    password,
    passwordError,
    onChangeEmail,
    onChangePassword,
    onClearEmail,
    onClearPassword,
    onPressLogin,
    onPressCreateAccount,
    onPressCreateAccountRecruiter,
  };
};
export default useLoginHook;
