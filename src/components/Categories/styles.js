import {StyleSheet} from 'react-native';
import Colors from 'themes/Colors';
import {WIDTH_RATIO, WIDTH_DEVICE} from 'themes/Dimens';

const widthItemBlock = WIDTH_DEVICE / 4.5;
const styles = StyleSheet.create({
  categoryContainer: {
    width: widthItemBlock,
    alignItems: 'center',
    backgroundColor: Colors.white,
    shadowColor: '#000',
  },
  categoryImage: {
    height: 60 * WIDTH_RATIO,
    width: 60 * WIDTH_RATIO,
    borderRadius: 5,
  },
  categoryTitle: {
    fontWeight: '500',
    fontSize: 12 * WIDTH_RATIO,
    marginBottom: 5,
    color: Colors.black,
    textAlign: 'center',
  },
  list: {
    backgroundColor: Colors.white,
  },
  contentContainerStyle: {
    paddingTop: 14,
    paddingBottom: 8,
  },
  categoryWrapper: {
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    height: 60 * WIDTH_RATIO,
    width: 60 * WIDTH_RATIO,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

export default styles;
