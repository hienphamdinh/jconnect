import {useState, useCallback, useRef} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import UserActions from 'store/user/action';
import {FireBaseStorage} from 'utils/FirebaseHelper';
import isEmpty from 'lodash/isEmpty';
import {useDispatch, useSelector} from 'react-redux';
import {USER_TYPE} from 'constants/Profile';
import Toast from 'react-native-toast-message';
import get from 'lodash/get';

const storage = FireBaseStorage();

const useRegisterHook = props => {
  const userInfo = useSelector(state => get(state, 'user.info'));
  const dispatch = useDispatch();
  const formRef = useRef();
  const insets = useSafeAreaInsets();
  const [activeToggle, setActiveToggle] = useState(
    get(userInfo, 'account.type') === USER_TYPE.STUDENT,
  );
  const [gender, setGender] = useState(get(userInfo, 'gender'));
  const [valid, setIsValid] = useState(false);
  const [openImagePicker, setOpenImagePicker] = useState(false);
  const [avatar, setAvatar] = useState(get(userInfo, 'avatar'));
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
    setLoading(false);
    Toast.show({
      type: 'done',
      text1: 'Success',
      text2: 'Your information is updated',
    });
  }, []);

  const onFailed = response => {
    setLoading(false);
    Toast.show({
      type: 'failed',
      text1: 'Update failed',
      text2: get(response, 'message', 'Update failed'),
    });
  };

  const onPressJoin = useCallback(async () => {
    setLoading(true);
    const data = get(formRef, 'current.values');

    let uploadImage;
    if (get(avatar, 'node.image.uri')) {
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
      'contact.phone': get(data, 'phone'),
      city: get(data, 'city'),
      address: get(data, 'address'),
      gender: get(data, 'gender'),
      mostRecentlyJob: get(data, 'mostRecentlyJob'),
      mostRecentlyCompany: get(data, 'mostRecentlyCompany'),
      education: {
        name: get(data, 'schoolName'),
        startYear: get(data, 'startYear'),
        endYear: get(data, 'endYear'),
      },
    };

    dispatch(
      UserActions.updateUser(get(userInfo, '_id'), user, onSuccess, onFailed),
    );
  }, [avatar, dispatch, onSuccess, userInfo]);

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
    userInfo,
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
