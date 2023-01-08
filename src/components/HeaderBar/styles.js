import {StyleSheet} from 'react-native';
import {
  WIDTH_RATIO,
  HEIGHT_RATIO,
  screenWidth,
  NORMAL_STATUS_BAR_HEIGHT,
} from 'themes/Dimens';

import Colors from 'themes/Colors';

export default StyleSheet.create({
  container: {
    paddingTop: 20 + NORMAL_STATUS_BAR_HEIGHT,
    backgroundColor: Colors.primary,
    paddingHorizontal: 16,
    paddingBottom: 16 * HEIGHT_RATIO,
  },
  search: {
    marginTop: 10,
    flexDirection: 'row',
    width: screenWidth - 32,
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
  avatarWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameWrapper: {
    marginLeft: 8,
  },
  welcomeText: {
    fontSize: 16 * WIDTH_RATIO,
    color: Colors.white,
    fontWeight: 'bold',
  },
  nameText: {
    fontSize: 20 * WIDTH_RATIO,
    color: Colors.white,
    fontWeight: 'bold',
  },
  notificationWrapper: {},
  divider: {
    flex: 1,
  },
  dotStyle: {
    position: 'absolute',
    backgroundColor: Colors.red,
    height: 10 * WIDTH_RATIO,
    width: 10 * WIDTH_RATIO,
    borderRadius: 5 * WIDTH_RATIO,
    bottom: 0,
    right: 0,
  },
});
