import {useState} from 'react';
import {Keyboard} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import I18n from 'locales';
import get from 'lodash/get';

const usePasswordHook = props => {
  const navigation = useNavigation();
  const email = get(props, 'route.params.email');
  const type = get(props, 'route.params.type');
  const [password, setPassWord] = useState('');
  const [rePassword, setRePassWord] = useState('');
  const [error, setError] = useState();
  const onPasswordChange = text => {
    setPassWord(text);
    setError();
  };
  const onRePasswordChange = text => {
    setRePassWord(text);
    setError();
  };

  const onPressCreateAccount = () => {
    Keyboard.dismiss();
    const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/g;

    if (!regex.test(password)) {
      setError(I18n.t('CreatePasswordScreen.PasswordInvalid'));
      return;
    }
    if (password === rePassword) {
      if (type === 'company') {
        navigation.navigate('RegisterInfoScreenCompany', {
          account: {
            password,
            email,
            type,
          },
        });
      } else {
        navigation.navigate('RegisterInfoScreen', {
          account: {
            password,
            email,
            type,
          },
        });
      }
    } else {
      setError(I18n.t('CreatePasswordScreen.NotMatch'));
    }
  };
  return {
    password,
    rePassword,
    error,
    onPressCreateAccount,
    onPasswordChange,
    onRePasswordChange,
  };
};

export default usePasswordHook;
