import {StyleSheet} from 'react-native';
import Colors from 'themes/Colors';
import {
  NORMAL_STATUS_BAR_HEIGHT,
  screenWidth,
  WIDTH_RATIO,
} from 'themes/Dimens';

const styles = StyleSheet.create({
  header: {
    paddingTop: NORMAL_STATUS_BAR_HEIGHT + 20,
    height: NORMAL_STATUS_BAR_HEIGHT + 60 * WIDTH_RATIO,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  row: {
    backgroundColor: Colors.white,
    width: screenWidth - 32,
    borderRadius: 12,
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
    marginBottom: 12,
  },
  jobImage: {
    height: 170 * WIDTH_RATIO,
    width: screenWidth - 32,
  },
  imageStyle: {
    height: 170 * WIDTH_RATIO,
    width: screenWidth - 32,
    borderRadius: 8,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18 * WIDTH_RATIO,
    color: Colors.black,
    marginBottom: 12,
  },
  wrapper: {
    flex: 1,
    marginTop: 12,
  },
  time: {
    color: Colors.primary,
    alignSelf: 'flex-end',
    marginBottom: 12,
  },
  contentContainerStyle: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  backBtn: {
    backgroundColor: 'transparent',
    top: NORMAL_STATUS_BAR_HEIGHT + 15,
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
});

export default styles;
