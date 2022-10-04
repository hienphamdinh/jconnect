import React from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import styles from './styles';
import BackComponent from 'components/BackComponent';
import Container from 'components/Container';
import useEnterEmailHook from './hook';
import size from 'lodash/size';
import AntDesign from 'react-native-vector-icons/AntDesign';
import I18n from 'locales';

export default function EnterEmailScreen() {
  const {onCheckEmail, onChangeText, onClearInput, email, error} =
    useEnterEmailHook();

  return (
    <Container notSafeArea>
      <BackComponent />
      <View style={styles.container}>
        <View style={styles.bigCircle} />
        <View style={styles.smallCircle} />
        <View style={styles.centerizedView}>
          <View style={styles.authBox}>
            <Text style={styles.loginTitleText}>
              {I18n.t('EnterEmailScreen.EnterEmail')}
            </Text>
            <View style={styles.hr} />
            <View style={styles.inputBox}>
              <Text style={styles.inputLabel}>{I18n.t('Email')}</Text>
              <View style={styles.rowInput}>
                <TextInput
                  style={styles.input}
                  keyboardType="email-address"
                  textContentType="emailAddress"
                  autoCapitalize="none"
                  value={email}
                  onChangeText={onChangeText}
                />
                <TouchableOpacity
                  style={styles.closeIcon}
                  onPress={onClearInput}>
                  <AntDesign name="close" />
                </TouchableOpacity>
              </View>
            </View>
            {size(error) > 0 && <Text style={styles.error}>{error}</Text>}
            <TouchableOpacity style={styles.loginButton} onPress={onCheckEmail}>
              <Text style={styles.loginButtonText}>{I18n.t('Next')}</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.registerText} onPress={() => {}}>
                {I18n.t('EnterEmailScreen.LoginNow')}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
}
