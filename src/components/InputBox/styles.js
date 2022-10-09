import {StyleSheet} from 'react-native';
import Colors from 'themes/Colors';
export default StyleSheet.create({
  inputBox: {
    marginTop: 10,
    borderWidth: 1,
    padding: 4,
    borderRadius: 8,
    borderColor: Colors.gray,
    justifyContent: 'center',
  },

  inputLabel: {
    fontSize: 16,
    marginTop: -15,
    color: Colors.black,
    backgroundColor: Colors.white,
    alignSelf: 'flex-start',
    paddingRight: 10,
    paddingLeft: 4,
    marginLeft: 4,
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: 'white',
    borderRadius: 4,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  star: {
    color: Colors.red,
    fontSize: 16,
  },
  error: {
    borderColor: Colors.red,
  },
  dateInput: {
    color: Colors.black,
  },
  errorText: {
    color: Colors.red,
  },
  boxWrapper: {
    marginBottom: 20,
  },
  item: {
    marginVertical: 8,
    borderRadius: 4,
    padding: 12,
    borderWidth: 1,
    borderColor: Colors.mediumGrey,
  },
  list: {
    flex: 1,
  },
  contentContainerStyle: {
    paddingTop: 24,
    paddingHorizontal: 16,
    paddingBottom: 100,
  },
});
