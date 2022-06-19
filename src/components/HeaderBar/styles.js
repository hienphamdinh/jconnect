import {StyleSheet} from 'react-native';
import {
  NORMAL_STATUS_BAR_HEIGHT,
  WIDTH_RATIO,
  HEIGHT_RATIO,
} from 'themes/Dimens';

import Colors from 'themes/Colors';

export default StyleSheet.create({
  container: {
    paddingTop: (30 + NORMAL_STATUS_BAR_HEIGHT) * HEIGHT_RATIO,
    backgroundColor: Colors.primary,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 16 * HEIGHT_RATIO,
  },
  search: {
    flex: 1,
    flexDirection: 'row',
    height: 40 * WIDTH_RATIO,
    backgroundColor: Colors.white,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
  },
  title: {
    fontSize: 16,
  },
  profilePicWrapper: {
    borderColor: '#CECECE',
    marginRight: 8 * WIDTH_RATIO,
  },
  profilePic: {
    height: 40 * WIDTH_RATIO,
    width: 40 * WIDTH_RATIO,
    borderRadius: (40 * WIDTH_RATIO) / 2,
  },
});
