import {StyleSheet} from 'react-native';
import Colors from 'themes/Colors';
import {screenWidth, WIDTH_RATIO} from 'themes/Dimens';

const styles = StyleSheet.create({
  list: {
    backgroundColor: 'blue',
  },
  slide: {
    height: 150 * WIDTH_RATIO,
    width: screenWidth - 32,
  },
  img: {
    height: 150 * WIDTH_RATIO,
    width: screenWidth - 32,
  },
  imgWrapper: {
    height: 150 * WIDTH_RATIO,
    width: screenWidth - 32,
  },
  dotStyle: {
    backgroundColor: Colors.primary,
    height: 6 * WIDTH_RATIO,
    width: 16 * WIDTH_RATIO,
    borderRadius: 4 * WIDTH_RATIO,
  },
  inactiveDotStyle: {
    backgroundColor: Colors.primary,
    height: 10 * WIDTH_RATIO,
    width: 10 * WIDTH_RATIO,
    borderRadius: 5 * WIDTH_RATIO,
  },

  containerDotStyle: {
    paddingVertical: 8,
  },
  container: {
    marginTop: 12,
  },
});

export default styles;
