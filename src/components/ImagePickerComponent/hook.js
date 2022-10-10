import {useEffect, useState, useRef, useCallback} from 'react';
import {CameraRoll} from '@react-native-camera-roll/camera-roll';
import {PermissionsAndroid} from 'react-native';
import get from 'lodash/get';
import concat from 'lodash/concat';
import size from 'lodash/size';

const useImagesPicker = props => {
  const [listImages, setListImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const hasNextPage = useRef(true);

  const hasAndroidPermission = async () => {
    const permission = PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE;
    const hasPermission = await PermissionsAndroid.check(permission);
    if (hasPermission) {
      return true;
    }
    const status = await PermissionsAndroid.request(permission);
    return status === 'granted';
  };

  const fetchImages = useCallback((after = '0') => {
    setLoading(after === '0');
    if (hasAndroidPermission()) {
      CameraRoll.getPhotos({
        first: 20,
        assetType: 'Photos',
        after,
      })
        .then(res => {
          setListImages(prev => concat(prev, get(res, 'edges')));
          hasNextPage.current = !!get(res, 'page_info.has_next_page');
        })
        .catch(err => {
          console.log('error', err.message);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      console.log('Can not access to gallery');
    }
  }, []);

  const onReached = () => {
    if (hasNextPage.current) {
      fetchImages(size(listImages).toString());
    }
  };

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  return {
    listImages,
    loading,
    onReached,
  };
};

export default useImagesPicker;
