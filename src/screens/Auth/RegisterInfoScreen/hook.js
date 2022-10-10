import {useState, useCallback, useRef} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import UserActions from 'store/users/action';
import get from 'lodash/get';

const useRegisterHook = props => {
  const dispatch = useDispatch();
  const account = get(props, 'route.params.account');
  const formRef = useRef();
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const [activeToggle, setActiveToggle] = useState(false);
  const [gender, setGender] = useState();
  const [valid, setIsValid] = useState(false);
  const [openImagePicker, setOpenImagePicker] = useState(false);
  const [avatar, setAvatar] = useState();

  const onPressToggle = useCallback(() => {
    setActiveToggle(!activeToggle);
  }, [activeToggle]);

  const onOpenImagePicker = () => {
    setOpenImagePicker(true);
  };
  const onCloseImagePicker = () => {
    setOpenImagePicker(false);
  };

  const onSuccess = response => {
    navigation.navigate('BottomTabNavigator');
  };

  const onFailed = response => {
    console.log('ERROR', response?.message);
  };

  const onPressJoin = useCallback(() => {
    const data = get(formRef, 'current.values');
    const user = {
      fullName: get(data, 'fullName'),
      birthDay: get(data, 'birthDay'),
      contact: {
        phone: get(data, 'phone'),
      },
      city: get(data, 'city'),
      address: get(data, 'address'),
      gender: get(data, 'gender'),

      account: {
        type: activeToggle ? 'student' : 'normal',
        ...account,
      },
      mostRecentlyJob: get(data, 'mostRecentlyJob'),
      mostRecentlyCompany: get(data, 'mostRecentlyCompany'),
      education: {
        name: get(data, 'schoolName'),
        startYear: get(data, 'startYear'),
        endYear: get(data, 'endYear'),
      },
    };

    dispatch(UserActions.createUser(user, onSuccess, onFailed));
  }, [account, activeToggle, dispatch, onSuccess]);

  const onPressGender = value => {
    formRef.current.setFieldValue('gender', value);
    setGender(value);
  };

  const onSelectedAvatar = item => {
    setAvatar(item);
  };

  return {
    insets,
    activeToggle,
    gender,
    formRef,
    valid,
    openImagePicker,
    avatar,
    onCloseImagePicker,
    onOpenImagePicker,
    setIsValid,
    onPressToggle,
    onPressJoin,
    onPressGender,
    onSelectedAvatar,
  };
};

export default useRegisterHook;
