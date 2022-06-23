import React from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import styles from './styles';
import BackComponent from 'components/BackComponent';
import Container from 'components/Container';
import useEnterEmailHook from './hook';
import size from 'lodash/size';
export default function EnterEmailScreen() {
  const {onCheckEmail, onChangeText, email, error} = useEnterEmailHook();

  return (
    <Container notSafeArea>
      <BackComponent />
      <View style={styles.container}>
        <View style={styles.bigCircle} />
        <View style={styles.smallCircle} />
        <View style={styles.centerizedView}>
          <View style={styles.authBox}>
            <Text style={styles.loginTitleText}>Enter your email</Text>
            <View style={styles.hr} />
            <View style={styles.inputBox}>
              <Text style={styles.inputLabel}>Email</Text>
              <TextInput
                style={styles.input}
                keyboardType="email-address"
                textContentType="emailAddress"
                autoCapitalize="none"
                value={email}
                onChangeText={onChangeText}
              />
            </View>
            {size(error) > 0 && <Text style={styles.error}>{error}</Text>}
            <TouchableOpacity style={styles.loginButton} onPress={onCheckEmail}>
              <Text style={styles.loginButtonText}>Next</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.registerText} onPress={() => {}}>
                Login now !
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
}
