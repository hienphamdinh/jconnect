import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import Container from 'components/Container';
import useEnterEmailHook from './hook';
import PrimaryInputLabel from 'components/PrimaryInputLabel';
import PrimaryButton from 'components/PrimaryButton';
import PrimaryTinyButton from 'components/PrimaryTinyButton';
import BigBackgroundCircle from 'components/BigBackgroundCircle';
import SmallBackgroundCircle from 'components/SmallBackgroundCircle';
import I18n from 'locales';

export default function EnterEmailScreen(props) {
  const {onCheckEmail, onChangeText, onClearInput, loading, email, error} =
    useEnterEmailHook(props);

  return (
    <Container notSafeArea showBack>
      <View style={styles.container}>
        <BigBackgroundCircle />
        <SmallBackgroundCircle />
        <View style={styles.centerizedView}>
          <View style={styles.authBox}>
            <Text style={styles.loginTitleText}>
              {I18n.t('EnterEmailScreen.EnterEmail')}
            </Text>
            <View style={styles.hr} />
            <PrimaryInputLabel
              value={email}
              error={error}
              label={I18n.t('Email')}
              onChangeText={onChangeText}
              onClearInput={onClearInput}
            />
            <PrimaryButton
              title={I18n.t('Next')}
              onPress={onCheckEmail}
              loading={loading}
            />
            <PrimaryTinyButton title={I18n.t('EnterEmailScreen.LoginNow')} />
          </View>
        </View>
      </View>
    </Container>
  );
}
