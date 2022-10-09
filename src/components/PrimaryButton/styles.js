import {StyleSheet} from 'react-native';
import Colors from 'themes/Colors';

export default StyleSheet.create({
  loginButton: {
    backgroundColor: '#49AC5A',
    marginTop: 10,
    paddingVertical: 10,
    borderRadius: 4,
  },
  loginButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  disable: {
    backgroundColor: Colors.mediumGrey,
  },
});
