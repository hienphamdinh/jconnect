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
    paddingBottom: 25 * HEIGHT_RATIO,
    alignItems: 'center',
  },
  search: {
    flexDirection: 'row',
    flex: 1,
    height: 50 * WIDTH_RATIO,
    backgroundColor: Colors.white,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  title: {
    flex: 1,
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
  avatar: {
    height: 40 * WIDTH_RATIO,
    width: 40 * WIDTH_RATIO,
    marginRight: 8,
  },
  avatarImg: {
    height: 40 * WIDTH_RATIO,
    width: 40 * WIDTH_RATIO,
  },
  avatarWrapper: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    bottom: -30,
  },
  filterWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
    height: 40 * WIDTH_RATIO,
    width: 40 * WIDTH_RATIO,
    borderRadius: 8,
    marginLeft: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  topHeader: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  topHeaderItem: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
    height: 50 * WIDTH_RATIO,
    width: 50 * WIDTH_RATIO,
    marginLeft: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  divider: {
    width: 10 * WIDTH_RATIO,
  },
  textHeaderItem: {
    fontWeight: 'bold',
    color: Colors.black,
    fontSize: 14 * WIDTH_RATIO,
    marginLeft: 8,
  },
  closeBtn: {
    backgroundColor: Colors.gray,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    padding: 4,
  },
});
