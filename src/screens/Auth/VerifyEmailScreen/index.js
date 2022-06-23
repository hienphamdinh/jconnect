import React from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import styles from './styles';
import BackComponent from 'components/BackComponent';
import Container from 'components/Container';
import useVerifyEmailHook from './hook';
import OpacityButton from 'components/OpacityButton';
import size from 'lodash/size';
export default function VerifyEmailScreen(props) {
  const {onVerifyEmail, onChangeText, onResendCode, error, pin} =
    useVerifyEmailHook(props);

  return (
    <Container notSafeArea>
      <BackComponent />
      <View style={styles.container}>
        <View style={styles.bigCircle} />
        <View style={styles.smallCircle} />
        <View style={styles.centerizedView}>
          <View style={styles.authBox}>
            <Text style={styles.loginTitleText}>Verify email</Text>
            <View style={styles.hr} />
            <View style={styles.inputBox}>
              <Text style={styles.inputLabel}>
                Enter code is sent to your email
              </Text>
              <TextInput
                style={styles.input}
                keyboardType="email-address"
                textContentType="emailAddress"
                autoCapitalize="none"
                value={pin}
                onChangeText={onChangeText}
              />
            </View>
            {size(error) > 0 && <Text style={styles.error}>{error}</Text>}
            <OpacityButton style={styles.loginButton} onPress={onVerifyEmail}>
              <Text style={styles.loginButtonText}>Verify</Text>
            </OpacityButton>
            <OpacityButton style={styles.reSendButton} onPress={onResendCode}>
              <Text style={styles.resendText}>Resend</Text>
            </OpacityButton>
          </View>
        </View>
      </View>
    </Container>
  );
}
