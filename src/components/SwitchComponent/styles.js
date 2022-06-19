import {StyleSheet} from 'react-native';
import {WIDTH_RATIO, HEIGHT_RATIO} from 'themes/Dimens';
export default StyleSheet.create({
  container: {
    height: 30 * HEIGHT_RATIO,
    width: 60 * WIDTH_RATIO,
    borderRadius: 40 * WIDTH_RATIO,
    justifyContent: 'center',
    paddingHorizontal: 4 * WIDTH_RATIO,
  },
  toggle: {
    width: 22 * WIDTH_RATIO,
    height: 22 * WIDTH_RATIO,
    borderRadius: 12 * WIDTH_RATIO,
  },
});
