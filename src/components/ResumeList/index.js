import React, {useState} from 'react';
import {View, Text} from 'react-native';
import OpacityButton from 'components/OpacityButton';
import {useSelector} from 'react-redux';
import get from 'lodash/get';
import styles from './styles';
import DocumentPicker, {types} from 'react-native-document-picker';
import size from 'lodash/size';
import Toast from 'react-native-toast-message';
import {FireBaseStorage} from 'utils/FirebaseHelper';

const storage = FireBaseStorage();

export default function ResumeList() {
  const [cv, setCv] = useState();
  return (
    <View style={styles.container}>
      <View style={styles.resumeWrapper}>
        <View style={styles.pdfContainer}>
          <Text style={styles.pdfText}>PDF</Text>
        </View>
        <View style={styles.pdfNameContainer}>
          <Text style={styles.cvName}>
            {cv ? get(cv, 'name') : 'You have no resume'}
          </Text>
        </View>
      </View>
      <OpacityButton
        style={styles.uploadBtn}
        onPress={() => {
          DocumentPicker.pick({
            type: types.pdf,
            presentationStyle: 'formSheet',
          })
            .then(res => {
              if (size(res)) {
                setCv(res[0]);
                console.log('link', get(res, '0.uri'));
                storage
                  .upLoadPDF({
                    fileName: get(res, '0.name'),
                    uri: get(res, '0.uri'),
                  })
                  .then(link => {
                    console.log('link', link);
                  })
                  .catch(err => {
                    Toast.show({
                      type: 'failed',
                      text1: 'Error',
                      text2: err?.message || 'Error upload your resume',
                    });
                  });
              } else {
                Toast.show({
                  type: 'failed',
                  text1: 'Error',
                  text2: 'Can not upload your resume',
                });
              }
            })
            .catch(err => {
              Toast.show({
                type: 'failed',
                text1: 'Error',
                text2: err?.message || 'Can not upload your resume',
              });
            });
        }}>
        <Text style={styles.textUpload}>
          {cv ? 'Change resume' : 'Upload resume'}
        </Text>
      </OpacityButton>
    </View>
  );
}
