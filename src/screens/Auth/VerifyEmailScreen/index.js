import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import BigBackgroundCircle from 'components/BigBackgroundCircle';
import SmallBackgroundCircle from 'components/SmallBackgroundCircle';
import Container from 'components/Container';
import useVerifyEmailHook from './hook';
import PrimaryInputLabel from 'components/PrimaryInputLabel';
import PrimaryButton from 'components/PrimaryButton';
import CountDown from 'components/CountDown';
import get from 'lodash/get';
import I18n from 'locales';
export default function VerifyEmailScreen(props) {
  const {
    onVerifyEmail,
    onChangeText,
    onFinish,
    onClearInput,
    onResendCode,
    error,
    pin,
  } = useVerifyEmailHook(props);

  return (
    <Container notSafeArea showBack>
      <View style={styles.container}>
        <BigBackgroundCircle />
        <SmallBackgroundCircle />
        <View style={styles.centerizedView}>
          <View style={styles.authBox}>
            <Text style={styles.loginTitleText}>
              {I18n.t('VerifyEmailScreen.VerifyEmail')}
            </Text>
            <View style={styles.hr} />
            <PrimaryInputLabel
              label={`${I18n.t('VerifyEmailScreen.OTPSent')} ${get(
                props,
                'route.params.email',
              )}`}
              keyboardType="email-address"
              textContentType="emailAddress"
              autoCapitalize="none"
              placeholder="Enter code send to your email"
              value={pin}
              onChangeText={onChangeText}
              onClearInput={onClearInput}
              error={error}
            />
            <PrimaryButton title={I18n.t('Verify')} onPress={onVerifyEmail} />
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
