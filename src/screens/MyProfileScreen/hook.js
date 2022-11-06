import {useState, useEffect} from 'react';
import {userDetail} from 'store/user/service';
import get from 'lodash/get';

const useProfileHook = props => {
  const userId = get(props, 'route.params.id');
  const [profile, setProfile] = useState();

  useEffect(() => {
    userDetail(userId).then(res => {
      if (res.status) {
        setProfile(get(res, 'user'));
      }
    });
  }, [userId]);
  return {
    profile,
  };
};

export default useProfileHook;
