import {useState, useCallback} from 'react';
import {Keyboard} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import I18n from 'locales';
import get from 'lodash/get';
import {useDispatch, useSelector} from 'react-redux';
import UserActions from 'store/user/action';
import Toast from 'react-native-toast-message';

const usePasswordHook = props => {
  const userInfo = useSelector(state => get(state, 'user.info'));
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [password, setPassWord] = useState('');
  const [rePassword, setRePassWord] = useState('');
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const onPasswordChange = text => {
    setPassWord(text);
    setError();
  };
  const onRePasswordChange = text => {
    setRePassWord(text);
    setError();
  };

  const onSuccess = useCallback(() => {
    setLoading(false);
    Toast.show({
      type: 'done',
      text1: 'Success',
      text2: 'Your password is updated',
    });
    navigation.navigate('BottomTabNavigator', {
      screen: 'Settings',
    });
  }, [navigation]);

  const onFailed = response => {
    setLoading(false);
    Toast.show({
      type: 'failed',
      text1: 'Update failed',
      text2: get(response, 'message', 'Update failed'),
    });
  };

  const onPressCreateAccount = () => {
    Keyboard.dismiss();
    const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/g;

    if (!regex.test(password)) {
      setError(I18n.t('CreatePasswordScreen.PasswordInvalid'));
      return;
    }
    if (password === rePassword) {
      setLoading(true);
      const user = {
        'account.password': password,
      };
      dispatch(
        UserActions.updateUser(get(userInfo, '_id'), user, onSuccess, onFailed),
      );
    } else {
      setError(I18n.t('CreatePasswordScreen.NotMatch'));
    }
  };
  return {
    password,
    rePassword,
    error,
    loading,
    onPressCreateAccount,
    onPasswordChange,
    onRePasswordChange,
  };
};

export default usePasswordHook;
