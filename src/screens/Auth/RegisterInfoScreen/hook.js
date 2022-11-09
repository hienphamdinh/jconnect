import {useState, useCallback, useRef} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import UserActions from 'store/user/action';
import {FireBaseStorage} from 'utils/FirebaseHelper';
import isEmpty from 'lodash/isEmpty';
import get from 'lodash/get';

const storage = FireBaseStorage();

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
  const [loading, setLoading] = useState(false);

  const onPressToggle = useCallback(() => {
    setActiveToggle(!activeToggle);
  }, [activeToggle]);

  const onOpenImagePicker = () => {
    setOpenImagePicker(true);
  };
  const onCloseImagePicker = () => {
    setOpenImagePicker(false);
  };

  const onSuccess = useCallback(() => {
    navigation.navigate('BottomTabNavigator');
    setLoading(false);
  }, [navigation]);

  const onFailed = response => {
    setLoading(false);
  };

  const onPressJoin = useCallback(async () => {
    setLoading(true);
    const data = get(formRef, 'current.values');

    let uploadImage;
    if (avatar) {
      uploadImage = await storage.upLoadImage({
        fileName: get(avatar, 'node.image.filename'),
        uri: get(avatar, 'node.image.uri'),
      });
    }

    let avatarUrl = '';
    if (uploadImage) {
      avatarUrl = await storage.getImageURL({
        fileName: get(avatar, 'node.image.filename'),
      });
    }

    const user = {
      avatar: avatarUrl,
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
  }, [account, activeToggle, avatar, dispatch, onSuccess]);

  const onPressGender = value => {
    formRef.current.setFieldValue('gender', value);
    setGender(value);
  };

  const onSelectedAvatar = useCallback(
    async item => {
      if (get(item, 'node.image.uri') === get(avatar, 'node.image.uri')) {
        setAvatar();
      } else {
        setAvatar(item);
      }
    },
    [avatar],
  );

  const checkFullValue = () => {
    const data = get(formRef, 'current.values');
    if (activeToggle) {
      return (
        !isEmpty(get(data, 'schoolName')) &&
        !isEmpty(get(data, 'endYear')) &&
        !isEmpty(get(data, 'startYear'))
      );
    }
    return (
      !isEmpty(get(data, 'mostRecentlyCompany')) &&
      !isEmpty(get(data, 'mostRecentlyJob'))
    );
  };

  return {
    insets,
    activeToggle,
    gender,
    formRef,
    valid,
    openImagePicker,
    avatar,
    loading,
    checkFullValue: checkFullValue(),
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
