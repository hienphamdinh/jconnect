import {StyleSheet} from 'react-native';
import Colors from 'themes/Colors';
import {WIDTH_RATIO} from 'themes/Dimens';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  header: {
    backgroundColor: Colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 16,
    paddingVertical: 12,
    elevation: 5,
  },
  info: {
    paddingLeft: 8,
  },
  messageName: {
    fontSize: 15 * WIDTH_RATIO,
    color: Colors.black,
    fontWeight: '500',
  },
  activeStatus: {},
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: Colors.white,
    paddingVertical: 8,
  },
  input: {
    flex: 1,
    backgroundColor: Colors.gray1,
    marginHorizontal: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  avatar: {
    height: 50 * WIDTH_RATIO,
    width: 50 * WIDTH_RATIO,
    borderRadius: 25 * WIDTH_RATIO,
  },
  avatarContainer: {
    height: 50 * WIDTH_RATIO,
    width: 50 * WIDTH_RATIO,
    borderRadius: 25 * WIDTH_RATIO,
    elevation: 3,
    marginLeft: 16,
  },
  list: {
    flex: 1,
    backgroundColor: Colors.white,
    marginTop: 10,
  },
  contentContainerStyle: {
    paddingHorizontal: 16,
    paddingTop: 100,
    paddingBottom: 20,
  },
  flexLeft: {
    alignSelf: 'flex-end',
    backgroundColor: Colors.primary,
  },
  itemMessage: {
    alignSelf: 'flex-start',
    backgroundColor: Colors.gray1,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 12,
    marginTop: 10,
  },
  messageText: {
    color: Colors.black,
  },
  messageTextActive: {
    color: Colors.white,
  },
});

export default styles;
