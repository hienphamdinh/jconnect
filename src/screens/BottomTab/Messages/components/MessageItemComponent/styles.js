import {StyleSheet} from 'react-native';
import Colors from 'themes/Colors';
import {screenHeight, WIDTH_RATIO} from 'themes/Dimens';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 10,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: Colors.mysticGrey,
    paddingHorizontal: 16,
  },
  profilePicWrapper: {
    height: 50 * WIDTH_RATIO,
    width: 50 * WIDTH_RATIO,
    borderRadius: (25 * WIDTH_RATIO) / 2,
    marginRight: 8 * WIDTH_RATIO,
  },
  profilePic: {
    height: 50 * WIDTH_RATIO,
    width: 50 * WIDTH_RATIO,
    borderRadius: (25 * WIDTH_RATIO) / 2,
  },
  infoWrapper: {
    flex: 1,
    justifyContent: 'space-between',
  },
  txtName: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.black,
    marginBottom: 5,
  },
  txtMessage: {
    fontSize: 14,
    color: Colors.mediumGrey,
  },
  time: {
    fontSize: 14,
    color: Colors.primary,
    fontWeight: '500',
  },
  borderAvatar: {
    borderColor: Colors.gray,
    borderWidth: 1,
  },
  modal: {
    backgroundColor: Colors.white,
    marginTop: screenHeight - screenHeight * 0.3,
  },
  delete: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
    marginHorizontal: 16,
  },
  deleteText: {
    color: Colors.red,
    fontWeight: 'bold',
    fontSize: 15,
  },
  clearConversation: {
    borderBottomWidth: 1,
  },
  conversationText: {
    color: Colors.primary,
    fontWeight: 'bold',
    fontSize: 15,
  },
});
