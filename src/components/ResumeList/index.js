import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import OpacityButton from 'components/OpacityButton';
import isEmpty from 'lodash/isEmpty';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import PrimaryButton from 'components/PrimaryButton';
import PdfViewComponent from 'components/PdfViewComponent';
import useResumeHook from './hook';
import styles from './styles';

export default function ResumeList(props) {
  const {loading, cv, onUpLoad, onPressView, showCV, pdfUri, setShowCV} =
    useResumeHook(props);

  return (
    <View style={styles.container}>
      <View style={styles.resumeWrapper}>
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
      </View>
      <View style={styles.btnContainer}>
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
        <View style={styles.flex1} />
        {!loading && !isEmpty(cv) ? (
          <PrimaryButton
            onPress={onPressView}
            customStyle={styles.uploadBtn}
            textStyle={styles.textUpload}
            title={'View'}
            renderRight={() => (
              <AntDesignIcons
                style={styles.icon}
                name="eye"
                size={20}
                color="white"
              />
            )}
          />
        ) : null}
      </View>
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
