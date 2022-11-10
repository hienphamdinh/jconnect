import {StyleSheet} from 'react-native';
import Colors from 'themes/Colors';
import {WIDTH_RATIO} from 'themes/Dimens';

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  itemContainer: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginHorizontal: 16,
    borderRadius: 8,
    backgroundColor: Colors.gray1,
    marginBottom: 4,
  },
  titleSearch: {
    fontSize: 16 * WIDTH_RATIO,
    color: Colors.black,
    marginBottom: 10,
    fontWeight: 'bold',
    marginHorizontal: 16,
  },
  textSearch: {
    fontWeight: '500',
  },
});
export default styles;
