import {StyleSheet} from 'react-native';
import {NORMAL_STATUS_BAR_HEIGHT, WIDTH_RATIO} from 'themes/Dimens';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollView: {
    flex: 1,
    paddingTop: 24,
    backgroundColor: 'white',
  },
  contentContainerStyle: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingBottom: 80,
  },
  header: {
    backgroundColor: '#49AC5A',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  iconWrapper: {
    borderWidth: 1,
    borderColor: '#49AC5A',
    backgroundColor: 'white',
    height: 70 * WIDTH_RATIO,
    width: 70 * WIDTH_RATIO,
    borderRadius: 35 * WIDTH_RATIO,
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
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
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
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  textSwitch: {
    fontSize: 16,
  },
  educationYear: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  divider: {
    width: 20 * WIDTH_RATIO,
  },
  inputItem: {
    flex: 1,
  },
  avatar: {
    height: 70 * WIDTH_RATIO,
    width: 70 * WIDTH_RATIO,
    borderRadius: 35 * WIDTH_RATIO,
    marginBottom: 15,
  },
  backBtn: {
    top: NORMAL_STATUS_BAR_HEIGHT + 20,
  },
});
