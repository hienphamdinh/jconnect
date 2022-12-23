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
  addJobs: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderWidth: 12,
    borderColor: Colors.primary,
    height: 60 * WIDTH_RATIO,
    width: 60 * WIDTH_RATIO,
    borderRadius: 30 * WIDTH_RATIO,
  },
});

export default styles;
