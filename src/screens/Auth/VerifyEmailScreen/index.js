import React from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import styles from './styles';
import BackComponent from 'components/BackComponent';
import Container from 'components/Container';
import useVerifyEmailHook from './hook';
import OpacityButton from 'components/OpacityButton';
import CountDown from 'components/CountDown';
import size from 'lodash/size';
import get from 'lodash/get';
import I18n from 'locales';
export default function VerifyEmailScreen(props) {
  const {onVerifyEmail, onChangeText, onFinish, onResendCode, error, pin} =
    useVerifyEmailHook(props);

  return (
    <Container notSafeArea>
      <BackComponent />
      <View style={styles.container}>
        <View style={styles.bigCircle} />
        <View style={styles.smallCircle} />
        <View style={styles.centerizedView}>
          <View style={styles.authBox}>
            <Text style={styles.loginTitleText}>
              {I18n.t('VerifyEmailScreen.VerifyEmail')}
            </Text>
            <View style={styles.hr} />
            <View style={styles.inputBox}>
              <Text style={styles.inputLabel}>
                {I18n.t('VerifyEmailScreen.OTPSent')}{' '}
                <Text style={styles.otpCode}>
                  {get(props, 'route.params.email')}
                </Text>
              </Text>
              <TextInput
                style={styles.input}
                keyboardType="email-address"
                textContentType="emailAddress"
                autoCapitalize="none"
                placeholder="Enter code send to your email"
                value={pin}
                onChangeText={onChangeText}
              />
            </View>
            {size(error) > 0 && <Text style={styles.error}>{error}</Text>}
            <OpacityButton style={styles.loginButton} onPress={onVerifyEmail}>
              <Text style={styles.loginButtonText}>Verify</Text>
            </OpacityButton>
            <CountDown
              initValue={180}
              onResend={onResendCode}
              onFinish={onFinish}
            />
          </View>
        </View>
      </View>
    </Container>
  );
}
