import React from 'react';
import {Text, View, TextInput} from 'react-native';
import Container from 'components/Container';
import usePasswordHook from './hook';
import I18n from 'locales';
import styles from './styles';
import PrimaryButton from 'components/PrimaryButton';
export default function ChangePasswordScreen(props) {
  const {
    password,
    rePassword,
    error,
    loading,
    onPressCreateAccount,
    onPasswordChange,
    onRePasswordChange,
  } = usePasswordHook(props);

  return (
    <Container notSafeArea showBack>
      <View style={styles.container}>
        <View style={styles.bigCircle} />
        <View style={styles.smallCircle} />
        <View style={styles.centerizedView}>
          <View style={styles.authBox}>
            <Text style={styles.loginTitleText}>Change password</Text>
            <View style={styles.hr} />
            <View style={styles.inputBox}>
              <Text style={styles.inputLabel}> {I18n.t('Password')}</Text>
              <TextInput
                style={styles.input}
                secureTextEntry={true}
                textContentType="password"
                placeholder={I18n.t('CreatePasswordScreen.NewPassword')}
                value={password}
                onChangeText={onPasswordChange}
              />
            </View>
            <View style={styles.inputBox}>
              <Text style={styles.inputLabel}>
                {I18n.t('CreatePasswordScreen.ReEnterPassword')}
              </Text>
              <TextInput
                style={styles.input}
                secureTextEntry={true}
                textContentType="password"
                placeholder={I18n.t('CreatePasswordScreen.ReEntered')}
                value={rePassword}
                onChangeText={onRePasswordChange}
              />
            </View>
            {error && <Text style={styles.error}>{error}</Text>}
            <PrimaryButton
              loading={loading}
              disable={!password || !rePassword}
              style={styles.loginButton}
              onPress={onPressCreateAccount}
              title={'Update'}
            />
          </View>
        </View>
      </View>
    </Container>
  );
}
