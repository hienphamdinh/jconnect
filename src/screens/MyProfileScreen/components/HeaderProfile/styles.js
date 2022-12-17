import {StyleSheet} from 'react-native';
import Colors from 'themes/Colors';
import {screenWidth, WIDTH_RATIO} from 'themes/Dimens';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.gray1,
  },
  topHeaderBg: {
    backgroundColor: Colors.gray1,
    height: 150 * WIDTH_RATIO,
    width: screenWidth,
  },
  avtWrapper: {
    backgroundColor: Colors.white,
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 10,
    borderRadius: 8,
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
    fontSize: 18 * WIDTH_RATIO,
    color: Colors.black,
    marginTop: 8,
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 4,
    marginTop: 8,
    marginLeft: 8,
  },
  messageText: {
    color: Colors.white,
    fontSize: 15 * WIDTH_RATIO,
    marginLeft: 8,
  },
  messageView: {
    alignItems: 'center',
  },
  jobProfile: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  icon: {
    marginRight: 4,
  },
  jobText: {
    fontSize: 14 * WIDTH_RATIO,
    textAlign: 'center',
  },
  banner: {
    backgroundColor: Colors.gray1,
    height: 150 * WIDTH_RATIO,
    width: screenWidth,
  },
});

export default styles;
