import {useState, useCallback, useRef, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {createJob} from 'store/user/service';
import {FireBaseStorage} from 'utils/FirebaseHelper';
import {useSelector, useDispatch} from 'react-redux';
import CategoriesActions from 'store/categories/action';
import get from 'lodash/get';

const storage = FireBaseStorage();

const usePostJob = props => {
  const dispatch = useDispatch();
  const userInfo = useSelector(state => get(state, 'user.info'));
  const formRef = useRef();
  const navigation = useNavigation();
  const [activeToggle, setActiveToggle] = useState(false);
  const [gender, setGender] = useState();
  const [valid, setIsValid] = useState(false);
  const [openImagePicker, setOpenImagePicker] = useState(false);
  const [thumbnail, setThumbnail] = useState();
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

  const onPressJoin = useCallback(async () => {
    setLoading(true);
    const data = get(formRef, 'current.values');

    let uploadImage;
    if (thumbnail) {
      uploadImage = await storage.upLoadImage({
        fileName: get(thumbnail, 'node.image.filename'),
        uri: get(thumbnail, 'node.image.uri'),
      });
    }

    let thumbnailUrl = '';
    if (uploadImage) {
      thumbnailUrl = await storage.getImageURL({
        fileName: get(thumbnail, 'node.image.filename'),
      });
    }

    const job = {
      thumbnail: thumbnailUrl,
      jobName: get(data, 'jobName'),
      categories: get(data, 'categories'),
      jobType: get(data, 'jobType'),
      city: get(data, 'city'),
      salary: get(data, 'salary'),
      expiredApply: get(data, 'expiredApply'),
      street: get(data, 'street'),
      description: get(data, 'description'),
      requirement: get(data, 'requirement'),
      postedBy: get(userInfo, '_id'),
    };

    createJob(job)
      .then(response => {
        if (response.status) {
          navigation.navigate('ApplyJobSuccess');
        } else {
          console.log('ERROR', response?.message);
        }
      })
      .catch(error => {
        console.log('ERROR', error?.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [navigation, thumbnail, userInfo]);

  const onPressGender = value => {
    formRef.current.setFieldValue('gender', value);
    setGender(value);
  };

  const onSelectedAvatar = useCallback(
    async item => {
      if (get(item, 'node.image.uri') === get(thumbnail, 'node.image.uri')) {
        setThumbnail();
      } else {
        setThumbnail(item);
      }
    },
    [thumbnail],
  );

  useEffect(() => {
    dispatch(CategoriesActions.getCategories());
  }, [dispatch]);

  return {
    activeToggle,
    gender,
    formRef,
    valid,
    openImagePicker,
    thumbnail,
    loading,
    onCloseImagePicker,
    onOpenImagePicker,
    setIsValid,
    onPressToggle,
    onPressJoin,
    onPressGender,
    onSelectedAvatar,
  };
};

export default usePostJob;
