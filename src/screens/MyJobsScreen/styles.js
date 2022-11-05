import {StyleSheet} from 'react-native';
import {NORMAL_STATUS_BAR_HEIGHT, WIDTH_RATIO} from 'themes/Dimens';
const styles = StyleSheet.create({
  backButtonStyle: {
    top: 15 * WIDTH_RATIO,
  },
  header: {
    height: NORMAL_STATUS_BAR_HEIGHT + 50,
  },
});

export default styles;
