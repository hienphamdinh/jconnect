import {StyleSheet} from 'react-native';
import Colors from 'themes/Colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 10,
  },
  reSendButton: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginLeft: 8,
  },
  resendText: {
    color: Colors.red,
    fontSize: 15,
    fontWeight: '500',
  },
  otpCode: {
    color: Colors.primary,
  },
});

export default styles;
