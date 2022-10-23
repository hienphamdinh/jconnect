import {StyleSheet} from 'react-native';
import Colors from 'themes/Colors';
import {NORMAL_STATUS_BAR_HEIGHT, WIDTH_RATIO} from 'themes/Dimens';

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#49AC5A',
    justifyContent: 'center',
    alignItems: 'center',
    height: (NORMAL_STATUS_BAR_HEIGHT + 70) * WIDTH_RATIO,
  },
  txtHeader: {
    color: Colors.white,
    fontSize: 20 * WIDTH_RATIO,
    fontWeight: 'bold',
  },
});
export default styles;
