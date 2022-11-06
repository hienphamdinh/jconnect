import {useEffect, useState, useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import {useDispatch} from 'react-redux';
import AuthActions from 'store/auth/action';
import {Keyboard} from 'react-native';
const useEnterEmailHook = props => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const email = get(props, 'route.params.email');
  const [pin, setPin] = useState('');
  const [verifyCode, setVerifyCode] = useState();
  const [error, setError] = useState('');
  const [isTimeOut, setIsTimeOut] = useState(false);

  const onChangeText = text => {
    setPin(text);
    setError();
  };

  const getOtpCode = useCallback(() => {
    dispatch(
      AuthActions.verifyEmail(email, res => {
        if (res.status) {
          setVerifyCode(get(res, 'otpCode'));
        }
      }),
    );
  }, [dispatch, email]);

  const onResendCode = useCallback(() => {
    setIsTimeOut(false);
    getOtpCode();
  }, [getOtpCode]);

  const onFinish = () => {
    setIsTimeOut(true);
  };

  const onClearInput = () => {
    setPin('');
  };

  const onVerifyEmail = () => {
    Keyboard.dismiss();

    // nhớ xóa
    if (isEmpty(pin)) {
      setError('Please enter code');
    } else if (pin === verifyCode) {
      if (isTimeOut) {
        setError('OTP is expired !!!');
      } else {
        setError();
        navigation.navigate('EnterPasswordScreen', {email});
      }
    } else {
      setError('Incorrect !!!');
    }
  };

  useEffect(() => {
    getOtpCode();
  }, [getOtpCode]);

  return {
    onVerifyEmail,
    onChangeText,
    onResendCode,
    onFinish,
    onClearInput,
    verifyCode,
    error,
    pin,
  };
};

export default useEnterEmailHook;
