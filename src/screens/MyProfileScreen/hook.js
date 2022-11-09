import {useState, useEffect} from 'react';
import {userDetail} from 'store/user/service';
import Toast from 'react-native-toast-message';
import get from 'lodash/get';

const useProfileHook = props => {
  const userId = get(props, 'route.params.id');
  const [profile, setProfile] = useState();

  useEffect(() => {
    userDetail(userId).then(res => {
      if (res.status) {
        setProfile(get(res, 'user'));
      } else {
        Toast.show({
          type: 'failed',
          text1: 'Error',
          text2: 'Not found information',
        });
      }
    });
  }, [userId]);
  return {
    profile,
  };
};

export default useProfileHook;
