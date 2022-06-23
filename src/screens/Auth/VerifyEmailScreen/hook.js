import {useEffect, useState, useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import axios from 'axios';
const useEnterEmailHook = props => {
  const navigation = useNavigation();
  const email = get(props, 'route.params.email');
  const [pin, setPin] = useState('');
  const [verifyCode, setVerifyCode] = useState();
  const [error, setError] = useState('');

  const onChangeText = text => {
    setPin(text);
    setError();
  };

  const onResendCode = useCallback(() => {
    axios
      .post('http://localhost:3000/api/users/verify-email', {email})
      .then(response => {
        setVerifyCode(get(response, 'data.randomCode'));
      });
    setPin('');
  }, [email]);

  const onVerifyEmail = () => {
    if (isEmpty(pin)) {
      setError('Please enter code');
    } else if (pin === verifyCode) {
      setError();
      navigation.navigate('EnterPasswordScreen', {email});
    } else {
      setError('Incorrect !!!');
    }
  };

  useEffect(() => {
    axios
      .post('http://localhost:3000/api/users/verify-email', {email})
      .then(response => {
        setVerifyCode(get(response, 'data.randomCode'));
      });
  }, [email]);

  return {
    onVerifyEmail,
    onChangeText,
    onResendCode,
    verifyCode,
    error,
    pin,
  };
};

export default useEnterEmailHook;
