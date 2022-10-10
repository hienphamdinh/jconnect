import {StyleSheet} from 'react-native';
import {screenWidth, screenHeight} from 'themes/Dimens';

const styles = StyleSheet.create({
  modal: {marginTop: screenHeight * 0.5},
  img: {
    height: screenWidth / 3,
    width: screenWidth / 3,
  },
  list: {
    flex: 1,
  },
  defaultImg: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  mask: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'black',
    opacity: 0.7,
    height: screenWidth / 3,
    width: screenWidth / 3,
  },
  checkContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'transparent',
    height: screenWidth / 3,
    width: screenWidth / 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
