import React from 'react';
import {View, Text} from 'react-native';
import FontistoIcons from 'react-native-vector-icons/Fontisto';
import {WIDTH_RATIO} from 'themes/Dimens';
import PrimaryButton from 'components/PrimaryButton';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
export default function SuccessScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <FontistoIcons name="laughing" size={250 * WIDTH_RATIO} color="white" />
      <Text style={styles.txtSuccess}>Success!!!</Text>
      <View style={styles.footer}>
        <PrimaryButton
          title={'Go home'}
          customStyle={styles.btnFooter}
          onPress={() => {
            navigation.reset({
              index: 0,
              routes: [
                {
                  name: 'BottomTabNavigator',
                },
              ],
            });
          }}
        />
        <View style={styles.divider} />
        <PrimaryButton
          title={'My job'}
          customStyle={styles.btnFooter}
          onPress={() => {
            navigation.reset({
              index: 0,
              routes: [
                {
                  name: 'BottomTabNavigator',
                },
              ],
            });
          }}
        />
      </View>
    </View>
  );
}
