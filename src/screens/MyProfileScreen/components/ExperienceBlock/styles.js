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
    flexWrap: 'wrap',
  },
  skillWrapper: {
    backgroundColor: Colors.white,
    paddingVertical: 4,
    paddingHorizontal: 16,
    marginRight: 20,
    marginBottom: 8,
  },
  skillText: {
    fontWeight: '500',
    fontSize: 13 * WIDTH_RATIO,
  },
  addSkills: {
    paddingHorizontal: 8,
  },
  txtInput: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: Colors.gray,
    marginRight: 8,
    marginTop: 15,
  },
  addBtn: {
    marginTop: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addText: {
    fontWeight: 'bold',
  },
  removeItem: {
    position: 'absolute',
    top: -8,
    left: -3,
  },
  positionText: {
    fontWeight: 'bold',
    color: Colors.black,
    fontSize: 16 * WIDTH_RATIO,
  },
  hr: {
    backgroundColor: Colors.gray,
    width: 100,
    height: 10,
  },
  openEdit: {
    borderWidth: 1,
    borderColor: Colors.primary,
    marginTop: 10,
    borderRadius: 8,
  },
});

export default styles;
