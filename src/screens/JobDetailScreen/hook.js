import {useCallback, useEffect, useState} from 'react';
import {ToastAndroid} from 'react-native';
import {getJobDetail} from 'store/job/service';
import {checkApply, checkSaved, savedJob} from 'store/job/service.js';
import Toast from 'react-native-toast-message';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import get from 'lodash/get';

const useDetailHook = props => {
  const navigation = useNavigation();
  const userId = useSelector(state => get(state, 'user.info._id'));
  const jobId = get(props, 'route.params.jobId');
  const canApply = get(props, 'route.params.canApply');
  const [loading, setLoading] = useState(false);
  const [jobDetail, setJobDetail] = useState();
  const [isBookmarked, setIsBookmarked] = useState(false);
  const isMyJob = userId === get(jobDetail, 'postedBy._id');

  const onPressApply = () => {
    checkApply(userId, get(jobDetail, '_id')).then(res => {
      if (!res.status) {
        Toast.show({
          type: 'failed',
          text1: 'Error',
          text2: get(res, 'message', 'Can not apply'),
        });
      } else {
        navigation.navigate('ApplicationScreen', {
          jobId: get(jobDetail, '_id'),
        });
      }
    });
  };

  const checkSavedJobs = useCallback(() => {
    const id = get(jobDetail, '_id');
    if (id) {
      checkSaved(userId, id).then(res => {
        if (!res.status) {
          setIsBookmarked(true);
        }
      });
    }
  }, [jobDetail, userId]);

  const onPressSavedJobs = () => {
    checkSaved(userId, get(jobDetail, '_id')).then(res => {
      if (!res.status) {
        setIsBookmarked(true);
        Toast.show({
          type: 'failed',
          text1: 'Error',
          text2: get(res, 'message', 'Can not apply'),
        });
      } else {
        savedJob(userId, jobId)
          .then(response => {
            if (response.status) {
              setIsBookmarked(true);
              ToastAndroid.show('Saved job', ToastAndroid.LONG);
            } else {
              setIsBookmarked(false);
              Toast.show({
                type: 'failed',
                text1: 'Error',
                text2: response?.message,
              });
            }
          })
          .catch(err => {
            console.log('err', err);
            setIsBookmarked(false);
            Toast.show({
              type: 'failed',
              text1: 'Error',
              text2: err?.message,
            });
          });
      }
    });
  };

  const onPressPostBy = () => {
    const isAdmin = get(jobDetail, 'postedBy.account.type') === 'admin';
    if (!isAdmin) {
      navigation.navigate('MyProfileScreen', {
        id: get(jobDetail, 'postedBy._id'),
      });
    }
  };

  useEffect(() => {
    setLoading(true);
    getJobDetail(jobId)
      .then(response => {
        if (response.status) {
          setJobDetail(get(response, 'data'));
        }
      })
      .catch(err => {
        console.log('ERROR', err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [jobId]);

  useEffect(() => {
    checkSavedJobs();
  }, [checkSavedJobs]);

  return {
    jobDetail,
    canApply,
    isBookmarked,
    isMyJob,
    loading,
    onPressApply,
    onPressSavedJobs,
    onPressPostBy,
  };
};

export default useDetailHook;
