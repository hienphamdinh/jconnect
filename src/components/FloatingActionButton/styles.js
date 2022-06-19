import {StyleSheet} from 'react-native';
import Colors from 'themes/Colors';
import {WIDTH_RATIO} from 'themes/Dimens';
export default StyleSheet.create({
  container: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50 * WIDTH_RATIO,
    width: 50 * WIDTH_RATIO,
    padding: 10 * WIDTH_RATIO,
    borderRadius: 25 * WIDTH_RATIO,
    bottom: 100,
    right: 16,
    backgroundColor: Colors.primary,
    zIndex: 10,
  },
});
