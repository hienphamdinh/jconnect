import {useState, useEffect} from 'react';
import {userDetail} from 'store/user/service';
import Toast from 'react-native-toast-message';
import get from 'lodash/get';
import UserActions from 'store/user/action';
import {useDispatch} from 'react-redux';

const useProfileHook = props => {
  const dispatch = useDispatch();
  const userId = get(props, 'route.params.id');
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState();

  const updateUser = ({
    data = {},
    onSuccess = () => {
      setLoading(false);
    },
    onFailed = () => {
      setLoading(false);
    },
  }) => {
    dispatch(
      UserActions.updateUser(
        userId,
        data,
        response => {
          setProfile(get(response, 'user'));
          onSuccess(response);
        },
        onFailed,
      ),
    );
  };

  useEffect(() => {
    setLoading(true);
    userDetail(userId)
      .then(res => {
        if (res.status) {
          setProfile(get(res, 'user'));
        } else {
          Toast.show({
            type: 'failed',
            text1: 'Error',
            text2: 'Not found information',
          });
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, [userId]);
  return {
    isCompany: get(profile, 'account.type') === 'company',
    profile,
    loading,
    updateUser,
  };
};

export default useProfileHook;
