import {StyleSheet} from 'react-native';
import Colors from 'themes/Colors';
import {WIDTH_RATIO} from 'themes/Dimens';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  hotJobTitle: {
    fontWeight: 'bold',
    color: Colors.black,
    fontSize: 15 * WIDTH_RATIO,
    marginLeft: 16,
    marginBottom: 20,
  },
});

export default styles;
