import {StyleSheet} from 'react-native';
import Colors from 'themes/Colors';
import {
  NORMAL_STATUS_BAR_HEIGHT,
  screenWidth,
  WIDTH_RATIO,
} from 'themes/Dimens';

const styles = StyleSheet.create({
  jobDetailContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  jobDetailContent: {
    height: '100%',
    padding: 16,
    paddingBottom: 0,
    position: 'relative',
  },
  jobDetailHeader: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  jobDetailCircleContainer: {
    backgroundColor: '#fafafa',
    height: 50,
    width: 50,
    borderRadius: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    marginTop: 10,
  },
  jobDetaiRow1: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 30,
  },
  jobImage: {
    height: 100 * WIDTH_RATIO,
    width: 100 * WIDTH_RATIO,
  },
  jobCompany: {
    fontSize: 14 * WIDTH_RATIO,
    fontWeight: '400',
  },
  jobRole: {
    fontWeight: 'bold',
    fontSize: 18 * WIDTH_RATIO,
    marginTop: 10,
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  jobSalary: {
    fontSize: 14 * WIDTH_RATIO,
    opacity: 0.4,
    fontWeight: 'bold',
  },
  jobLocation: {
    fontSize: 14 * WIDTH_RATIO,
    marginLeft: 5,
  },
  jobDetailSection: {
    paddingBottom: 80,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 16 * WIDTH_RATIO,
    marginVertical: 10,
    color: Colors.black,
  },
  jobInfoText: {
    lineHeight: 20,
    opacity: 0.6,
    fontSize: 14,
    marginBottom: 40,
  },
  bottomWrapper: {
    position: 'absolute',
    bottom: 10,
    marginLeft: '5%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  applyHereBtn: {
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  applyHereText: {
    color: '#fff',
    marginRight: 10,
    fontSize: 15,
    fontWeight: 'bold',
  },
  imgWrapper: {
    height: 100 * WIDTH_RATIO,
    width: 100 * WIDTH_RATIO,
  },
  rowTitle: {
    fontSize: 14 * WIDTH_RATIO,
    color: Colors.black,
  },
  jobInfoWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  divider: {
    marginHorizontal: 4,
    color: Colors.black,
  },
  infoItemWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeNow: {
    color: Colors.primary,
    fontWeight: 'bold',
  },
  expired: {
    color: Colors.red,
    textDecorationLine: 'line-through',
  },
  timeItem: {
    width: (screenWidth - 40 * WIDTH_RATIO) / 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 12,
    backgroundColor: Colors.athensGrey,
    borderColor: Colors.mediumGreen,
  },
  timeWrapper: {
    width: screenWidth,
    flexDirection: 'row',
    paddingHorizontal: 15 * WIDTH_RATIO,
    marginTop: 10,
  },
  timeTitle: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  timeDivider: {
    width: 10 * WIDTH_RATIO,
  },
  applyIcon: {
    marginTop: 4,
    marginLeft: 8,
  },
});

export default styles;
