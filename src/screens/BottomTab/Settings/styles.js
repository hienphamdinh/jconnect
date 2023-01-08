import {StyleSheet} from 'react-native';
import {
  screenHeight,
  WIDTH_RATIO,
  NORMAL_STATUS_BAR_HEIGHT,
} from 'themes/Dimens';
import Colors from 'themes/Colors';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
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
    paddingTop: 20 + NORMAL_STATUS_BAR_HEIGHT,
    backgroundColor: '#49AC5A',
    alignItems: 'center',
    paddingVertical: 20,
    height: screenHeight / 3,
  },
  iconWrapper: {
    borderWidth: 1,
    borderColor: '#49AC5A',
    backgroundColor: 'white',
    height: 140 * WIDTH_RATIO,
    width: 140 * WIDTH_RATIO,
    borderRadius: 70 * WIDTH_RATIO,
    marginBottom: 15,
  },
  imageStyle: {
    borderWidth: 1,
    borderColor: '#49AC5A',
    backgroundColor: 'white',
    height: 140 * WIDTH_RATIO,
    width: 140 * WIDTH_RATIO,
    borderRadius: 70 * WIDTH_RATIO,
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
  textName: {
    fontSize: 18 * WIDTH_RATIO,
    fontWeight: '600',
    color: Colors.white,
  },
  content: {
    flex: 1,
    backgroundColor: Colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 20,
    overflow: 'hidden',
    marginTop: -45,
  },
  list: {
    flex: 1,
  },
});
