import React from 'react';
import {Text, View, TouchableWithoutFeedback, Keyboard} from 'react-native';
import useLoginHook from './hook';
import PrimaryInputLabel from 'components/PrimaryInputLabel';
import styles from './styles';
import PrimaryButton from 'components/PrimaryButton';
import PrimaryTinyButton from 'components/PrimaryTinyButton';

export default function LoginScreen() {
  const {
    loading,
    email,
    emailError,
    password,
    passwordError,
    onChangeEmail,
    onChangePassword,
    onClearEmail,
    onClearPassword,
    onPressLogin,
    onPressCreateAccount,
  } = useLoginHook();

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.bigCircle} />
        <View style={styles.smallCircle} />
        <View style={styles.centerizedView}>
          <View style={styles.authBox}>
            <Text style={styles.loginTitleText}>Login</Text>
            <View style={styles.hr} />
            <PrimaryInputLabel
              label={'Email'}
              value={email}
              onChangeText={onChangeEmail}
              onClearInput={onClearEmail}
              error={emailError}
            />
            <PrimaryInputLabel
              label={'Password'}
              value={password}
              keyboardType="default"
              onChangeText={onChangePassword}
              onClearInput={onClearPassword}
              error={passwordError}
              secureTextEntry
            />
            <PrimaryButton
              title={'Login'}
              onPress={onPressLogin}
              loading={loading}
            />
            <PrimaryTinyButton
              title={'Create account'}
              onPress={onPressCreateAccount}
            />
            {/* <PrimaryTinyButton
              title={'Forgot password'}
              customStyle={styles.forgotStyle}
            /> */}
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
