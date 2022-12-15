import {StyleSheet} from 'react-native';
import Colors from 'themes/Colors';
import {WIDTH_RATIO} from 'themes/Dimens';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    flexDirection: 'row',
    shadowColor: Colors.black,
    elevation: 5,
    paddingRight: 16,
    paddingLeft: 12,
    paddingVertical: 12,
    marginBottom: 20,
  },
  jobImage: {
    height: 80 * WIDTH_RATIO,
    width: 80 * WIDTH_RATIO,
  },
  imageStyle: {
    height: 80 * WIDTH_RATIO,
    width: 80 * WIDTH_RATIO,
    borderRadius: 8,
  },
  text: {},
  wrapper: {
    flex: 1,
    marginLeft: 16,
  },
  time: {
    color: Colors.primary,
    fontWeight: '600',
    marginBottom: 4,
  },
});

export default styles;
