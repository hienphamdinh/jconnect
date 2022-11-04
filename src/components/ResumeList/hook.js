import {useState} from 'react';
import DocumentPicker, {types} from 'react-native-document-picker';
import size from 'lodash/size';
import Toast from 'react-native-toast-message';
import {FireBaseStorage} from 'utils/FirebaseHelper';
import UserActions from 'store/user/action';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import get from 'lodash/get';

const storage = FireBaseStorage();

const useResumeHook = props => {
  const {onPressUpload, onResumeChange, initResume} = props;
  const dispatch = useDispatch();
  const userId = useSelector(state => get(state, 'user.info._id'));
  const [loading, setLoading] = useState(false);
  const [cv, setCv] = useState(get(initResume, 'name') || '');
  const [showCV, setShowCV] = useState(false);
  const [pdfUri, setPdfUri] = useState(get(initResume, 'url'));

  const onUpLoad = async () => {
    onPressUpload && onPressUpload();
    const document = await DocumentPicker.pick({
      type: types.pdf,
      presentationStyle: 'formSheet',
      copyTo: 'cachesDirectory',
    });
    setLoading(true);

    if (size(document)) {
      const uploadDocument = await storage.upLoadPDF({
        fileName: get(document, '0.name'),
        uri: get(document, '0.fileCopyUri'),
      });
      setPdfUri(get(document, '0.fileCopyUri'));
      setCv(get(document, '0.name'));

      if (get(uploadDocument, 'state') === 'success') {
        const urlDownload = await storage.getPDFURL({
          fileName: get(document, '0.name'),
        });

        if (urlDownload) {
          onResumeChange &&
            onResumeChange({
              name: get(document, '0.name', 'My Resume'),
              url: urlDownload,
            });
          dispatch(
            UserActions.updateUser(
              userId,
              {
                'applicationInfo.cv': {
                  url: urlDownload,
                  name: get(document, '0.name'),
                },
              },
              () => {
                setLoading(false);
              },
              () => {
                setLoading(false);
              },
            ),
          );
        } else {
          setLoading(false);
        }
      } else {
        setLoading(false);
        Toast.show({
          type: 'failed',
          text1: 'Error',
          text2: uploadDocument?.message || 'Error upload your resume',
        });
      }
    } else {
      setLoading(false);
      Toast.show({
        type: 'failed',
        text1: 'Error',
        text2: 'Can not upload your resume',
      });
    }
  };

  const onPressView = () => {
    setShowCV(true);
  };

  return {
    loading,
    cv,
    onUpLoad,
    onPressView,
    showCV,
    pdfUri,
    setShowCV,
  };
};

export default useResumeHook;
