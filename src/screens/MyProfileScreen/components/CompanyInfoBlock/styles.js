import {StyleSheet} from 'react-native';
import Colors from 'themes/Colors';
import {WIDTH_RATIO} from 'themes/Dimens';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 8,
    paddingVertical: 12,
  },
  title: {
    marginHorizontal: 16,
    fontWeight: 'bold',
    color: Colors.black,
    fontSize: 16 * WIDTH_RATIO,
  },
});

export default styles;
