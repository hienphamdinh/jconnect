import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import axios from 'axios';
const useEnterEmailHook = () => {
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
      const res = await axios.post(
        'http://localhost:3000/api/users/check-email',
        {email: email},
      );

      if (get(res, 'data.status')) {
        setError(get(res, 'data.message'));
      } else {
        setError();
        navigation.navigate('VerifyEmailScreen', {email});
      }
    }
  };

  const onChangeText = text => {
    setEmail(text);
    setError();
  };

  return {
    onCheckEmail,
    onChangeText,
    error,
    email,
  };
};

export default useEnterEmailHook;
