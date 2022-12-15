import {StyleSheet} from 'react-native';
import Colors from 'themes/Colors';
import {screenWidth, WIDTH_RATIO} from 'themes/Dimens';

const styles = StyleSheet.create({
  container: {},
  row: {
    backgroundColor: Colors.white,
    width: screenWidth - 80,
    borderRadius: 12,
    shadowColor: Colors.black,
    elevation: 5,
    paddingRight: 16,
    paddingLeft: 12,
    paddingVertical: 12,
    marginRight: 12,
  },
  jobImage: {
    height: 150 * WIDTH_RATIO,
    width: screenWidth - 104,
  },
  imageStyle: {
    height: 150 * WIDTH_RATIO,
    width: screenWidth - 104,
    borderRadius: 8,
  },
  text: {
    fontWeight: 'bold',
    color: Colors.black,
  },
  wrapper: {
    flex: 1,
    marginTop: 12,
  },
  time: {
    color: Colors.primary,

    marginBottom: 4,
  },
  contentContainerStyle: {
    padding: 8,
  },
});

export default styles;
