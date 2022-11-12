import {StyleSheet} from 'react-native';
import Colors from 'themes/Colors';
import {WIDTH_RATIO} from 'themes/Dimens';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    marginHorizontal: 16,
    paddingHorizontal: 16,
    marginTop: 16,
    borderRadius: 8,
    paddingVertical: 12,
  },
  title: {
    fontWeight: 'bold',
    color: Colors.black,
    fontSize: 16 * WIDTH_RATIO,
    marginBottom: 8,
  },
  addBioWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    marginTop: 20,
    justifyContent: 'center',
  },
  addBioText: {
    marginLeft: 4,
    fontSize: 14 * WIDTH_RATIO,
    color: Colors.white,
  },
  editBtn: {
    position: 'absolute',
    top: 0,
    right: 5,
    backgroundColor: Colors.white,
    height: 30 * WIDTH_RATIO,
    width: 30 * WIDTH_RATIO,
    justifyContent: 'center',
    alignItems: 'center',
  },
  aboutMeBlock: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  skillWrapper: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.primary,
    paddingVertical: 4,
    paddingHorizontal: 16,
    borderRadius: 16,
    marginRight: 20,
    marginBottom: 8,
    alignItems: 'center',
  },
  skillText: {
    fontWeight: '500',
    fontSize: 13 * WIDTH_RATIO,
  },
  addSkills: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: 8,
  },
  txtInput: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: Colors.gray,
    marginRight: 8,
  },
  addBtn: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  addText: {
    fontWeight: 'bold',
  },
  removeItem: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
});

export default styles;
