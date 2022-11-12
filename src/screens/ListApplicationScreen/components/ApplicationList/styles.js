import {StyleSheet} from 'react-native';
import Colors from 'themes/Colors';
import {WIDTH_RATIO} from 'themes/Dimens';

const styles = StyleSheet.create({
  itemContainer: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.gray,
    overflow: 'hidden',
    marginTop: 16,
  },
  item: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: Colors.gray1,
    paddingVertical: 12,
  },
  list: {},
  contentContainerStyle: {
    paddingBottom: 100,
    paddingTop: 20,
    paddingHorizontal: 16,
  },
  btnContainer: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingBottom: 12,
  },
  btnDivider: {
    width: 12 * WIDTH_RATIO,
  },
  btnWrapper: {
    flex: 1,
  },
  textStyle: {
    fontSize: 14 * WIDTH_RATIO,
  },
  nameInfo: {
    flexShrink: 1,
    paddingLeft: 8,
  },
  applicationName: {
    fontSize: 16 * WIDTH_RATIO,
    fontWeight: 'bold',
    color: Colors.black,
  },
  position: {
    color: Colors.black,
  },
});

export default styles;
