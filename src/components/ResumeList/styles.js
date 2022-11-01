import {StyleSheet} from 'react-native';
import Colors from 'themes/Colors';
import {WIDTH_RATIO} from 'themes/Dimens';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
  },
  resumeWrapper: {
    borderWidth: 1,
    flexDirection: 'row',
    borderColor: Colors.mediumGrey,
    borderRadius: 8,
    overflow: 'hidden',
  },
  pdfContainer: {
    backgroundColor: Colors.red,
    paddingHorizontal: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pdfText: {
    color: Colors.white,
  },
  pdfNameContainer: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 8,
  },
  uploadBtn: {
    alignSelf: 'center',
    marginTop: 8,
    borderRadius: 8,
    borderWidth: 1,
    backgroundColor: Colors.deepSkyBlue,
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textUpload: {
    fontSize: 14 * WIDTH_RATIO,
    fontWeight: 'bold',
    color: Colors.white,
  },
  cvName: {
    fontWeight: 'bold',
  },
});

export default styles;
