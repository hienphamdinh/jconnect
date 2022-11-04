import {StyleSheet} from 'react-native';
import Colors from 'themes/Colors';
import {screenWidth} from 'themes/Dimens';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25,
  },
  pdf: {
    flex: 1,
    width: screenWidth,
    backgroundColor: Colors.white,
  },
  marginTop: {
    marginTop: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
});

export default styles;
