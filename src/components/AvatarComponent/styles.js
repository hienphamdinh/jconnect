import {StyleSheet} from 'react-native';
import Colors from 'themes/Colors';
import {WIDTH_RATIO} from 'themes/Dimens';

const styles = StyleSheet.create({
  container: {},
  imageWrapper: {
    height: 50 * WIDTH_RATIO,
    width: 50 * WIDTH_RATIO,
    borderRadius: 12 * WIDTH_RATIO,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    height: 50 * WIDTH_RATIO,
    width: 50 * WIDTH_RATIO,
    borderRadius: 12 * WIDTH_RATIO,
  },
});

export default styles;
