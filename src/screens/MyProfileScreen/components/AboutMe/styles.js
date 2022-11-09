import {StyleSheet} from 'react-native';
import Colors from 'themes/Colors';
import {WIDTH_RATIO} from 'themes/Dimens';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    marginHorizontal: 16,
    paddingHorizontal: 16,
    marginTop: 16,
    borderRadius: 8,
    paddingVertical: 12,
  },
  title: {
    fontWeight: 'bold',
    color: Colors.black,
    fontSize: 16 * WIDTH_RATIO,
  },
  addBioWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    marginTop: 20,
    justifyContent: 'center',
  },
  addBioText: {
    marginLeft: 4,
    fontSize: 14 * WIDTH_RATIO,
    color: Colors.white,
  },
  editBtn: {
    position: 'absolute',
    top: 0,
    right: 5,
    backgroundColor: Colors.white,
    height: 30 * WIDTH_RATIO,
    width: 30 * WIDTH_RATIO,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
