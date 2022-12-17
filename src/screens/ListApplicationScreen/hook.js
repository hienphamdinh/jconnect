import {useEffect, useState, useRef, useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import {listApplication} from 'store/job/service';
import get from 'lodash/get';
import {size} from 'lodash';
import Toast from 'react-native-toast-message';

const useListApplicationHook = props => {
  const navigation = useNavigation();
  const jobId = get(props, 'route.params.jobId');
  const total = useRef(0);
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(false);
  const [viewMore, setViewMore] = useState(false);
  const [pdfUri, setPdfUri] = useState(false);
  const [showCV, setShowCV] = useState(false);

  const fetchListApplication = useCallback(
    (skip = 0) => {
      setLoading(skip === 0);
      setViewMore(skip !== 0);
      listApplication(jobId, skip)
        .then(res => {
          if (res.status) {
            setApplications(get(res, 'data'));
            total.current = get(res, 'total');
          } else {
            setApplications([]);
          }
        })
        .catch(() => {})
        .finally(() => {
          setLoading(false);
          setViewMore(false);
        });
    },
    [jobId],
  );

  const onEndReached = () => {
    if (!viewMore && size(applications) < total.current) {
      fetchListApplication(size(applications));
    }
  };

  const onPressViewProfile = item => {
    navigation.navigate('MyProfileScreen', {
      id: get(item, 'applicant._id'),
    });
  };

  const onPressViewResume = item => {
    if (get(item, 'applicant.applicationInfo.cv.url')) {
      setShowCV(true);
      setPdfUri(get(item, 'applicant.applicationInfo.cv.url'));
    } else {
      Toast.show({
        type: 'failed',
        text1: 'Error',
        text2: 'This applicant have not upload resume yet',
      });
    }
  };

  useEffect(() => {
    fetchListApplication();
  }, [fetchListApplication]);

  return {
    loading,
    viewMore,
    applications,
    pdfUri,
    showCV,
    setShowCV,
    onEndReached,
    onPressViewProfile,
    onPressViewResume,
  };
};
export default useListApplicationHook;
