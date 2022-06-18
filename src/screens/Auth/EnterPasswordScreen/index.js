import React from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
export default function EnterPasswordScreen() {
  const navigation = useNavigation();
  const onPressCreateAccount = () => {
    navigation.navigate('RegisterInfoScreen');
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.bigCircle}></View>
        <View style={styles.smallCircle}></View>
        <View style={styles.centerizedView}>
          <View style={styles.authBox}>
            <Text style={styles.loginTitleText}>Create password</Text>
            <View style={styles.hr}></View>
            <View style={styles.inputBox}>
              <Text style={styles.inputLabel}>Password</Text>
              <TextInput
                style={styles.input}
                autoCapitalize={false}
                secureTextEntry={true}
                textContentType="password"
              />
            </View>
            <View style={styles.inputBox}>
              <Text style={styles.inputLabel}>Re-enter password</Text>
              <TextInput
                style={styles.input}
                autoCapitalize={false}
                secureTextEntry={true}
                textContentType="password"
              />
            </View>
            <TouchableOpacity
              style={styles.loginButton}
              onPress={onPressCreateAccount}>
              <Text style={styles.loginButtonText}>Create</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity>
              <Text style={styles.registerText} onPress={onPressCreateAccount}>
                Login now !
              </Text>
            </TouchableOpacity> */}
            {/* <TouchableOpacity>
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity> */}
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
