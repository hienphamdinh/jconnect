import {StyleSheet} from 'react-native';
import Colors from 'themes/Colors';
import {screenWidth, WIDTH_RATIO} from 'themes/Dimens';

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: Colors.primary,
  },
  list: {},
  tabBarText: {
    color: Colors.primary,
    fontWeight: 'bold',
    fontSize: 15 * WIDTH_RATIO,
  },
  itemTabBar: {
    flex: 1,
    backgroundColor: Colors.white,
    minWidth: screenWidth / 3,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    overflow: 'hidden',
  },
  contentContainerStyle: {
    justifyContent: 'center',
  },
  indicator: {
    height: 8 * WIDTH_RATIO,
    width: '80%',
    position: 'absolute',
    bottom: -4,
    borderRadius: 20,
    backgroundColor: Colors.primary,
  },
});

export default styles;
