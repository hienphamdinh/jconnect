import {StyleSheet} from 'react-native';
import Colors from 'themes/Colors';
import {screenWidth, WIDTH_RATIO} from 'themes/Dimens';

export default StyleSheet.create({
  contentFlatList: {
    paddingBottom: 200,
    paddingTop: 24,
    paddingLeft: 16,
    backgroundColor: Colors.white,
  },
  list: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  contentView: {
    backgroundColor: Colors.white,
  },
  item: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    padding: 8,
    width: (screenWidth - 48) / 2,
    marginRight: 16,
    elevation: 5,
    marginBottom: 16,
  },
  divider: {
    width: 20 * WIDTH_RATIO,
  },
  avatar: {
    alignSelf: 'center',
    width: 70 * WIDTH_RATIO,
    height: 70 * WIDTH_RATIO,
    borderRadius: 35 * WIDTH_RATIO,
  },
  imageStyle: {
    width: 70 * WIDTH_RATIO,
    height: 70 * WIDTH_RATIO,
    borderRadius: 35 * WIDTH_RATIO,
  },
  avatarCompany: {
    width: 70 * WIDTH_RATIO,
    height: 70 * WIDTH_RATIO,
  },
  imageStyleCompany: {
    width: 70 * WIDTH_RATIO,
    height: 70 * WIDTH_RATIO,
  },
  info: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  btnProfile: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  textStyle: {
    fontSize: 14 * WIDTH_RATIO,
  },
  nameText: {
    color: Colors.black,
    fontWeight: '500',
    fontSize: 15 * WIDTH_RATIO,
    height: 38 * WIDTH_RATIO,
  },
  nameTextCompany: {
    color: Colors.black,
    fontWeight: 'bold',
    fontSize: 15 * WIDTH_RATIO,
  },
  itemCompany: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    borderRadius: 12,
    padding: 8,
    width: screenWidth - 32,
    marginRight: 16,
    elevation: 5,
    marginBottom: 16,
  },
  infoCompany: {
    flex: 1,
    paddingLeft: 16,
  },
});
