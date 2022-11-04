import React from 'react';
import {View} from 'react-native';
import Pdf from 'react-native-pdf';
import Popup from 'components/Popup';
import {ActivityIndicator} from 'react-native';
import styles from './styles';

export default function PdfViewComponent({
  visible,
  onClose,
  source = {uri: ''},
}) {
  return (
    <Popup
      visible={visible}
      showHeader
      title="View Resume"
      onClose={onClose}
      style={styles.marginTop}
      lightMode>
      <View style={styles.container}>
        <Pdf
          trustAllCerts={false}
          source={source}
          style={styles.pdf}
          onLoadComplete={(numberOfPages, filePath) => {
            console.log(`Number of pages: ${numberOfPages}`);
          }}
          onPageChanged={(page, numberOfPages) => {
            console.log(`Current page: ${page}`);
          }}
          onError={error => {
            console.log(error);
          }}
          onPressLink={uri => {
            console.log(`Link pressed: ${uri}`);
          }}
        />
      </View>
    </Popup>
  );
}
