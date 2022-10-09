import {StyleSheet} from 'react-native';
import {NORMAL_STATUS_BAR_HEIGHT} from 'themes/Dimens';

export default StyleSheet.create({
  jobDetailCircleContainer: {
    position: 'absolute',
    top: NORMAL_STATUS_BAR_HEIGHT,
    left: 16,
    backgroundColor: '#fafafa',
    height: 50,
    width: 50,
    borderRadius: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 5,
  },
});
