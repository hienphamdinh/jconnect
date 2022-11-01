import {useEffect, useState} from 'react';
import {getJobDetail} from 'store/job/service';
import {checkApply} from 'store/job/service.js';
import Toast from 'react-native-toast-message';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import get from 'lodash/get';

const useDetailHook = props => {
  const navigation = useNavigation();
  const userId = useSelector(state => get(state, 'user.info._id'));
  const jobId = get(props, 'route.params.jobId');
  const [jobDetail, setJobDetail] = useState();

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

  useEffect(() => {
    getJobDetail(jobId)
      .then(response => {
        setJobDetail(get(response, 'data'));
      })
      .catch(err => {
        console.log('ERROR', err.message);
      });
  }, [jobId]);
  return {jobDetail, onPressApply};
};

export default useDetailHook;
