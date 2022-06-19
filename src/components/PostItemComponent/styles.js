import {StyleSheet} from 'react-native';
import {WIDTH_RATIO, DEVICE_WIDTH, HEIGHT_RATIO} from 'themes/Dimens';
import Colors from 'themes/Colors';
export default StyleSheet.create({
  container: {
    paddingVertical: 12,
    backgroundColor: Colors.white,
  },
  info: {
    flexDirection: 'row',
    paddingHorizontal: 16,
  },
  avatar: {
    height: 40 * WIDTH_RATIO,
    width: 40 * WIDTH_RATIO,
    borderRadius: 20 * WIDTH_RATIO,
  },
  textInfoWrapper: {
    marginLeft: 10,
  },
  textContentWrapper: {
    marginTop: 16,
    paddingHorizontal: 16,
  },
  textContent: {
    // fontSize: 13 * WIDTH_RATIO,
  },
  imageContent: {
    width: DEVICE_WIDTH,
    height: 300 * HEIGHT_RATIO,
    marginVertical: 16,
  },
  infoName: {
    fontSize: 14 * WIDTH_RATIO,
    fontWeight: '500',
    color: Colors.black,
  },
  position: {
    fontSize: 12 * WIDTH_RATIO,
    color: Colors.blueGrey,
  },
  infoTime: {
    fontSize: 12 * WIDTH_RATIO,
    color: Colors.blueGrey,
  },
  actionWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  iconWrapper: {
    flexDirection: 'row',
    width: 100 * WIDTH_RATIO,
    height: 30 * HEIGHT_RATIO,
    borderRadius: 20 * WIDTH_RATIO,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.paleGreyFour,
  },
  textNumberAction: {
    fontSize: 13 * WIDTH_RATIO,
    marginLeft: 5,
  },
});
