import {StyleSheet} from 'react-native';
import Colors from 'themes/Colors';
export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderColor: Colors.gray1,
    paddingVertical: 18,
  },
  iconContainer: {
    flex: 1,
    paddingLeft: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '400',
    color: Colors.black,
  },
});
