import {StyleSheet} from 'react-native';
import Colors from 'themes/Colors';
import {screenWidth, WIDTH_RATIO} from 'themes/Dimens';

const styles = StyleSheet.create({
  toastContainer: {
    backgroundColor: Colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    width: screenWidth - 32,
    borderRadius: 8,
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
    overflow: 'hidden',
  },
  toastIconWrapper: {
    width: 40 * WIDTH_RATIO,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  toastInfoWrapper: {
    backgroundColor: Colors.white,
    padding: 8,
    flex: 1,
  },
  toastTitle: {
    fontWeight: 'bold',
    color: Colors.black,
    fontSize: 16 * WIDTH_RATIO,
  },
  toastContent: {
    color: Colors.black,
    fontSize: 13 * WIDTH_RATIO,
  },
  toastDone: {
    backgroundColor: Colors.primary,
  },
  toastFailed: {
    backgroundColor: Colors.red,
  },
});

export default styles;
