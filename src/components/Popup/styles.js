import {StyleSheet} from 'react-native';
import Colors from 'themes/Colors';
import {NORMAL_STATUS_BAR_HEIGHT} from 'themes/Dimens';

const styles = StyleSheet.create({
  modal: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: NORMAL_STATUS_BAR_HEIGHT + 20,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    elevation: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderColor: Colors.mediumGrey,
  },
  closeIcon: {
    flex: 1,
    alignItems: 'flex-end',
  },
  headerText: {
    color: Colors.black,
    fontSize: 16,
    fontWeight: '600',
  },
});

export default styles;
