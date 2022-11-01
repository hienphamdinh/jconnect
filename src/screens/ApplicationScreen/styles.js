import {StyleSheet} from 'react-native';
import Colors from 'themes/Colors';
import {WIDTH_RATIO} from 'themes/Dimens';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  heading: {
    fontWeight: 'bold',
    color: Colors.black,
    marginBottom: 12,
    fontSize: 16 * WIDTH_RATIO,
  },
});

export default styles;
