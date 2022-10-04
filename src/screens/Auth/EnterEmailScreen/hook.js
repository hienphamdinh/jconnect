import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import {useDispatch} from 'react-redux';
import AuthActions, {AuthTypes} from 'store/auth/action';
const useEnterEmailHook = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const onCheckEmail = async () => {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (isEmpty(email)) {
      setError('Email is empty');
    } else if (!regex.test(email)) {
      setError('Email is invalid');
    } else {
      dispatch(
        AuthActions.checkEmail(email, res => {
          if (get(res, 'data.status')) {
            setError(get(res, 'data.message'));
          } else {
            setError();
            navigation.navigate('VerifyEmailScreen', {email});
          }
        }),
      );
    }
  };

  const onChangeText = text => {
    setEmail(text);
    setError();
  };

  const onClearInput = () => {
    setEmail('');
  };
  return {
    onCheckEmail,
    onChangeText,
    onClearInput,
    error,
    email,
  };
};

export default useEnterEmailHook;
