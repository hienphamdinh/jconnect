import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import {useDispatch} from 'react-redux';
import AuthActions from 'store/auth/action';
import I18n from 'locales';
const useEnterEmailHook = props => {
  const type = get(props, 'route.params.type');
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState('');
  const onCheckEmail = async () => {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (isEmpty(email)) {
      setError(I18n.t('EnterEmailScreen.EmailEmpty'));
    } else if (!regex.test(email)) {
      setError(I18n.t('EnterEmailScreen.EmailInvalid'));
    } else {
      setLoading(true);
      dispatch(
        AuthActions.checkEmail(email, res => {
          setLoading(false);
          if (get(res, 'status')) {
            navigation.navigate('VerifyEmailScreen', {email, type});
            setError();
          } else {
            setError(get(res, 'message'));
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

  const goBack = () => {
    navigation.goBack();
  };

  return {
    onCheckEmail,
    onChangeText,
    onClearInput,
    goBack,
    loading,
    error,
    email,
  };
};

export default useEnterEmailHook;
