import {StyleSheet} from 'react-native';
import Colors from 'themes/Colors';
import {WIDTH_RATIO} from 'themes/Dimens';

const styles = StyleSheet.create({
  container: {},
  hotJobTitle: {
    fontWeight: 'bold',
    color: Colors.black,
    fontSize: 15 * WIDTH_RATIO,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  more: {
    fontWeight: 'bold',
    color: Colors.deepSkyBlue,
  },
});

export default styles;
