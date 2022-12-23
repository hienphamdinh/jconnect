import {StyleSheet} from 'react-native';
import Colors from 'themes/Colors';
import {screenWidth, WIDTH_RATIO} from 'themes/Dimens';

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderColor: Colors.white,
  },
  list: {},
  tabBarText: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 15 * WIDTH_RATIO,
  },
  itemTabBar: {
    flex: 1,
    backgroundColor: Colors.primary,
    minWidth: screenWidth / 2,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    overflow: 'hidden',
    borderBottomWidth: 1,
    borderColor: Colors.white,
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
    backgroundColor: Colors.white,
  },
});

export default styles;
