import {useRef, useState} from 'react';
import {applyJob} from 'store/job/service';
import {useSelector} from 'react-redux';
import Toast from 'react-native-toast-message';
import UserActions from 'store/user/action';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import get from 'lodash/get';

const useApplyHook = props => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const jobId = get(props, 'route.params.jobId');
  const userId = useSelector(state => get(state, 'user.info._id'));
  const [loading, setLoading] = useState(false);
  const formRef = useRef();

  const onResumeChange = cv => {
    formRef.current.setFieldValue('cv', cv);
  };

  const onSubmit = () => {
    applyJob(userId, jobId)
      .then(res => {
        if (res.status) {
          navigation.navigate('ApplyJobSuccess');
        } else {
          Toast.show({
            type: 'failed',
            text1: 'Error',
            text2: res?.message,
          });
        }
      })
      .catch(err => {
        console.log('err', err);
        Toast.show({
          type: 'failed',
          text1: 'Error',
          text2: err?.message,
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const onPressSubmit = () => {
    dispatch(
      UserActions.updateUser(
        userId,
        {
          'applicationInfo.phone': get(formRef, 'current.values.phone'),
          'applicationInfo.email': get(formRef, 'current.values.email'),
        },
        () => {
          onSubmit();
        },
        () => {
          setLoading(false);
        },
      ),
    );
  };

  return {
    formRef,
    loading,
    onResumeChange,
    onPressSubmit,
  };
};

export default useApplyHook;
