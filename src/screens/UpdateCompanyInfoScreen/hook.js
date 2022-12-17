import {useState, useCallback, useRef} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import UserActions from 'store/user/action';
import {FireBaseStorage} from 'utils/FirebaseHelper';
import {useSelector, useDispatch} from 'react-redux';
import Toast from 'react-native-toast-message';
import get from 'lodash/get';

const storage = FireBaseStorage();

const useRegisterHook = props => {
  const dispatch = useDispatch();
  const userInfo = useSelector(state => get(state, 'user.info'));
  const formRef = useRef();
  const insets = useSafeAreaInsets();
  const [valid, setIsValid] = useState(false);
  const [openImagePicker, setOpenImagePicker] = useState(false);
  const [avatar, setAvatar] = useState(get(userInfo, 'avatar'));
  const [loading, setLoading] = useState(false);

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
    } else {
      avatarUrl = avatar;
    }

    const user = {
      avatar: avatarUrl,
      fullName: get(data, 'fullName'),
      contact: {
        phone: get(data, 'phone'),
        email: get(data, 'email'),
      },
      city: get(data, 'city'),
      address: get(data, 'address'),
      company: {
        website: get(data, 'website'),
        amountEmployee: get(data, 'amountEmployee'),
        foundedYear: get(data, 'foundedYear'),
      },
    };

    dispatch(
      UserActions.updateUser(get(userInfo, '_id'), user, onSuccess, onFailed),
    );
  }, [avatar, dispatch, onSuccess, userInfo]);

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

  return {
    insets,
    formRef,
    valid,
    openImagePicker,
    avatar,
    loading,
    userInfo,
    onCloseImagePicker,
    onOpenImagePicker,
    setIsValid,
    onPressJoin,
    onSelectedAvatar,
  };
};

export default useRegisterHook;
