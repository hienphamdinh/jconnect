import {StyleSheet} from 'react-native';
import Colors from 'themes/Colors';
export default StyleSheet.create({
  inputBox: {
    marginTop: 10,
  },

  inputLabel: {
    fontSize: 18,
    marginBottom: 6,
  },
  input: {
    flex: 1,
    padding: 0,
  },

  error: {
    marginTop: 10,
    fontSize: 14,
    color: Colors.red,
  },
  rowInput: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#dfe4ea',
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },

  closeIcon: {
    height: 15,
    width: 15,
    backgroundColor: Colors.white,
    borderRadius: 7.5,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
});
