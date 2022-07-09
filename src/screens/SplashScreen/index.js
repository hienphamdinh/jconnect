import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  StatusBar,
  Platform,
  Text,
} from 'react-native';
import Images from 'themes/Images';
import {useNavigation} from '@react-navigation/native';
import ExtraDimensions from 'react-native-extra-dimensions-android';
const NavbarHeight =
  Dimensions.get('screen').height - Dimensions.get('window').height;

const NavBarExtra =
  ExtraDimensions.get('REAL_WINDOW_HEIGHT') -
  (ExtraDimensions.get('STATUS_BAR_HEIGHT') -
    ExtraDimensions.get('SOFT_MENU_BAR_HEIGHT'));
export default function SplashScreen() {
  const navigation = useNavigation();
  setTimeout(function () {
    navigation.navigate('AuthenticationStack');
  }, 5000);
  return (
    <View style={styles.container}>
      <Text>HeaderBar</Text>
      {/* <Images.SplashScreen /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  image: {
    height: '100%',
    width: '100%',
  },
});
