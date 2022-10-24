import {StyleSheet} from 'react-native';
import {WIDTH_DEVICE, WIDTH_RATIO, HEIGHT_RATIO} from 'themes/Dimens';
import Colors from 'themes/Colors';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
  },
  divider: {
    width: WIDTH_DEVICE,
    height: 6 * HEIGHT_RATIO,
    backgroundColor: Colors.paleGreyFour,
  },
  contentContainerStyle: {
    paddingBottom: 100,
  },
  flatList: {
    backgroundColor: Colors.white,
    paddingTop: 24,
  },
  scrollView: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});
