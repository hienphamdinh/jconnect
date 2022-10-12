import storage from '@react-native-firebase/storage';
const reference = storage();
export const FireBaseStorage = () => ({
  upLoadImage: ({fileName = 'default', uri}) => {
    return reference.ref(`/jconnect/images/${fileName}`).putFile(uri);
  },
  getImageURL: ({fileName = 'default'}) => {
    return reference.ref(`/jconnect/images/${fileName}`).getDownloadURL();
  },
  upLoadPDF: ({fileName = 'default', uri}) => {
    return reference.ref(`/jconnect/PDF/${fileName}`).putFile(uri);
  },
  getPDFURL: ({fileName = 'default'}) => {
    return reference.ref(`/jconnect/PDF/${fileName}`).getDownloadURL();
  },
});
