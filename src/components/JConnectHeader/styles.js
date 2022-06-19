import {StyleSheet} from 'react-native';
import {
  NORMAL_STATUS_BAR_HEIGHT,
  WIDTH_RATIO,
  HEIGHT_RATIO,
} from 'themes/Dimens';

import Colors from 'themes/Colors';

export default StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: Colors.primary,
  },
  profilePicWrapper: {
    borderColor: '#CECECE',
    padding: 5,
  },
  profilePic: {
    height: 40 * WIDTH_RATIO,
    width: 40 * WIDTH_RATIO,
    borderRadius: (40 * WIDTH_RATIO) / 2,
  },
});
