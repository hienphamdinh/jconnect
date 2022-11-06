import {StyleSheet} from 'react-native';
import Colors from 'themes/Colors';
import {WIDTH_RATIO} from 'themes/Dimens';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.gray1,
  },
  topHeaderBg: {
    backgroundColor: Colors.primary,
    height: 100 * WIDTH_RATIO,
  },
  avtWrapper: {
    backgroundColor: Colors.white,
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  avatar: {
    height: 96 * WIDTH_RATIO,
    width: 96 * WIDTH_RATIO,
    borderRadius: 48 * WIDTH_RATIO,
  },
  avatarContainer: {
    height: 100 * WIDTH_RATIO,
    width: 100 * WIDTH_RATIO,
    borderRadius: 50 * WIDTH_RATIO,
    elevation: 5,
    marginTop: -50,
  },
  profileText: {
    fontWeight: 'bold',
    fontSize: 16 * WIDTH_RATIO,
    color: Colors.black,
    marginTop: 8,
  },
});

export default styles;
