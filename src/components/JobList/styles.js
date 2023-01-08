import {StyleSheet} from 'react-native';
import Colors from 'themes/Colors';
import {screenWidth, WIDTH_RATIO} from 'themes/Dimens';

const styles = StyleSheet.create({
  jobContainer: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingRight: 16,
    paddingLeft: 12,
    paddingVertical: 12,
    marginBottom: 20,
  },
  jobImage: {
    height: 80 * WIDTH_RATIO,
    width: 80 * WIDTH_RATIO,
  },
  imageStyle: {
    height: 80 * WIDTH_RATIO,
    width: 80 * WIDTH_RATIO,
    borderRadius: 8,
  },
  jobInfo: {
    flex: 1,
    paddingLeft: 12,
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  jobCompany: {
    width: '100%',
    opacity: 0.5,
    fontSize: 13,
    fontWeight: 'bold',
  },
  jobRole: {
    fontWeight: 'bold',
    fontSize: 14,
    width: '100%',
    color: Colors.black,
  },
  jobSalary: {
    fontSize: 13,
    fontWeight: 'bold',
    width: '100%',
    color: Colors.black,
    opacity: 0.5,
  },
  jobLocation: {
    fontSize: 13,
    color: Colors.primary,
    fontWeight: '500',
  },
  container: {
    flex: 1,
  },
  titleBlock: {
    fontSize: 16 * WIDTH_RATIO,
    fontWeight: 'bold',
    color: Colors.black,
    paddingHorizontal: 18,
  },
  contentContainerStyle: {
    paddingTop: 20,
    paddingHorizontal: 16,
    paddingBottom: 100,
  },
  nothingComponent: {
    flex: 1,
    height: 200 * WIDTH_RATIO,
    width: screenWidth - 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nothingImg: {
    height: 120 * WIDTH_RATIO,
    width: 120 * WIDTH_RATIO,
  },
  nothingText: {
    fontSize: 16 * WIDTH_RATIO,
    fontWeight: 'bold',
    marginTop: 10,
  },
  listApply: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginHorizontal: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    paddingVertical: 12,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  listApplyText: {
    fontWeight: 'bold',
    color: Colors.black,
    marginRight: 8,
  },
  pending: {
    fontWeight: 'bold',
    color: Colors.lightYellow,
  },
  rejected: {
    fontWeight: 'bold',
    color: Colors.red,
  },
  visibleWrapper: {
    paddingLeft: 16,
  },
  viewContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  visibleText: {
    fontWeight: 'bold',
    color: Colors.primary,
  },
});

export default styles;
