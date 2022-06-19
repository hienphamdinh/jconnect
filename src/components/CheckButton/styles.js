import {StyleSheet} from 'react-native';
import {WIDTH_RATIO} from 'themes/Dimens';
import Colors from 'themes/Colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkCircle: {
    height: 22 * WIDTH_RATIO,
    width: 22 * WIDTH_RATIO,
    borderRadius: 11 * WIDTH_RATIO,
    borderWidth: 1,
    borderColor: Colors.gray,
  },
  active: {
    backgroundColor: Colors.primary,
  },
  unActive: {
    backgroundColor: Colors.paleGrey,
  },
  title: {
    marginLeft: 8,
    fontSize: 16,
  },
});
