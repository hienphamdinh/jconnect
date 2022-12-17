import {StyleSheet} from 'react-native';
import {screenWidth, WIDTH_RATIO} from 'themes/Dimens';
import Colors from 'themes/Colors';
export default StyleSheet.create({
  contentFlatList: {
    paddingBottom: 200,
    paddingTop: 24,
    backgroundColor: Colors.white,
  },
  list: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  contentView: {
    backgroundColor: Colors.white,
  },
  nothingComponent: {
    flex: 1,
    height: 200 * WIDTH_RATIO,
    width: screenWidth - 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nothingImg: {
    height: 120 * WIDTH_RATIO,
    width: 120 * WIDTH_RATIO,
  },
});
