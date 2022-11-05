import React from 'react';
import {View, Text, ActivityIndicator, TouchableOpacity} from 'react-native';
import OpacityButton from 'components/OpacityButton';
import isEmpty from 'lodash/isEmpty';
import PdfViewComponent from 'components/PdfViewComponent';
import useResumeHook from './hook';
import styles from './styles';

export default function ResumeList(props) {
  const {loading, cv, onUpLoad, onPressView, showCV, pdfUri, setShowCV} =
    useResumeHook(props);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.resumeWrapper} onPress={onPressView}>
        <View style={styles.pdfContainer}>
          <Text style={styles.pdfText}>PDF</Text>
        </View>
        <View style={styles.pdfNameContainer}>
          {!loading ? (
            <Text style={styles.cvName}>
              {!isEmpty(cv) ? cv : 'You have no resume'}
            </Text>
          ) : (
            <Text>{''}</Text>
          )}
        </View>
      </TouchableOpacity>
      <OpacityButton
        style={styles.uploadBtn}
        onPress={() => {
          onUpLoad();
        }}>
        <Text style={styles.textUpload}>
          {loading
            ? 'Uploading resume'
            : !isEmpty(cv)
            ? 'Change resume'
            : 'Upload resume'}
        </Text>
        {loading ? (
          <ActivityIndicator color={'white'} size={20} style={styles.icon} />
        ) : null}
      </OpacityButton>

      {pdfUri ? (
        <PdfViewComponent
          visible={showCV}
          source={{
            uri: pdfUri,
            cache: true,
          }}
          onClose={() => setShowCV(false)}
        />
      ) : null}
    </View>
  );
}
