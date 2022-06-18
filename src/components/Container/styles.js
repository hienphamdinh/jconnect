import {StyleSheet} from 'react-native';
import {STATUS_BAR_HEIGHT} from '../../themes/Dimens';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  translucent: {
    left: 0,
    width: '100%',
    opacity: 0.2,
    backgroundColor: '#000000',
    top: 0,
    position: 'absolute',
    height: STATUS_BAR_HEIGHT,
  },
});
