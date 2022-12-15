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
    onPressCreateAccountRecruiter,
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
              placeholder="Email"
              value={email}
              onChangeText={onChangeEmail}
              onClearInput={onClearEmail}
              error={emailError}
            />
            <PrimaryInputLabel
              label={'Password'}
              placeholder="Password"
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
              textStyle={styles.tinyButton}
              title={'Sign up as recruiter'}
              onPress={onPressCreateAccountRecruiter}
            />
            <PrimaryTinyButton
              textStyle={styles.tinyButtonUnder}
              title={'Sign up as applicant'}
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
