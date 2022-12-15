import {useState, useCallback, useRef} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import UserActions from 'store/user/action';
import {FireBaseStorage} from 'utils/FirebaseHelper';
import get from 'lodash/get';

const storage = FireBaseStorage();

const useRegisterHook = props => {
  const dispatch = useDispatch();
  const account = get(props, 'route.params.account');
  const formRef = useRef();
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const [valid, setIsValid] = useState(false);
  const [openImagePicker, setOpenImagePicker] = useState(false);
  const [avatar, setAvatar] = useState();
  const [loading, setLoading] = useState(false);

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
      contact: {
        phone: get(data, 'phone'),
        email: get(data, 'email'),
      },
      city: get(data, 'city'),
      address: get(data, 'address'),
      account: {
        ...account,
      },
      company: {
        website: get(data, 'website'),
        amountEmployee: get(data, 'amountEmployee'),
        foundedYear: get(data, 'foundedYear'),
      },
    };

    dispatch(UserActions.createUser(user, onSuccess, onFailed));
  }, [account, avatar, dispatch, onSuccess]);

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
    onCloseImagePicker,
    onOpenImagePicker,
    setIsValid,
    onPressJoin,
    onSelectedAvatar,
  };
};

export default useRegisterHook;
