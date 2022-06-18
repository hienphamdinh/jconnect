import {StyleSheet} from 'react-native';
import {WIDTH_RATIO} from 'themes/Dimens';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: '#49AC5A',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  plusIcon: {
    position: 'absolute',
    top: -9 * WIDTH_RATIO,
    right: 0,
  },
  iconWrapper: {
    borderWidth: 1,
    borderColor: '#49AC5A',
    backgroundColor: 'white',
    height: 60 * WIDTH_RATIO,
    width: 60 * WIDTH_RATIO,
    borderRadius: 30 * WIDTH_RATIO,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  logoBox: {
    width: 100,
    height: 100,
    backgroundColor: '#49AC5A',
    borderRadius: 1000,
    alignSelf: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    top: -50,
    marginBottom: -50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  loginTitleText: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10,
    alignSelf: 'center',
    marginVertical: 18,
  },
  hr: {
    width: '100%',
    height: 0.5,
    backgroundColor: '#444',
    marginTop: 6,
  },
  inputBox: {
    marginTop: 10,
    borderBottomWidth: 1,
    borderColor: '#49AC5A',
  },

  inputLabel: {
    fontSize: 18,
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: 'white',
    borderRadius: 4,
    paddingHorizontal: 10,
  },
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
  registerText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
  },
  forgotPasswordText: {
    textAlign: 'center',
    marginTop: 12,
    fontSize: 16,
  },
});
