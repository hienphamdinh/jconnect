import React from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import BackComponent from 'components/BackComponent';
import Container from 'components/Container';
import usePasswordHook from './hook';
import styles from './styles';
export default function EnterPasswordScreen() {
  const navigation = useNavigation();
  const onPressCreateAccount = () => {
    navigation.navigate('RegisterInfoScreen');
  };
  return (
    <Container notSafeArea>
      <BackComponent />
      <View style={styles.container}>
        <View style={styles.bigCircle} />
        <View style={styles.smallCircle} />
        <View style={styles.centerizedView}>
          <View style={styles.authBox}>
            <Text style={styles.loginTitleText}>Create password</Text>
            <View style={styles.hr} />
            <View style={styles.inputBox}>
              <Text style={styles.inputLabel}>Password</Text>
              <TextInput
                style={styles.input}
                secureTextEntry={true}
                textContentType="password"
                placeholder="Create a new password"
              />
            </View>
            <View style={styles.inputBox}>
              <Text style={styles.inputLabel}>Re-enter password</Text>
              <TextInput
                style={styles.input}
                secureTextEntry={true}
                textContentType="password"
                placeholder="Re-enter a new password"
              />
            </View>
            <TouchableOpacity
              style={styles.loginButton}
              onPress={onPressCreateAccount}>
              <Text style={styles.loginButtonText}>Create</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
}
