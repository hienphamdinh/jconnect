import {StyleSheet} from 'react-native';
import Colors from 'themes/Colors';
import {WIDTH_RATIO} from 'themes/Dimens';

const styles = StyleSheet.create({
  recommendForYou: {
    marginHorizontal: 16,
    marginTop: 16,
    fontSize: 15 * WIDTH_RATIO,
    fontWeight: 'bold',
    color: Colors.black,
  },
  listJob: {
    marginTop: 30,
  },
  marginTop: {
    marginTop: 40,
  },
  marginTopWhenSearch: {
    marginTop: 2,
  },
  listHotJobs: {
    marginTop: 8,
  },
});

export default styles;
