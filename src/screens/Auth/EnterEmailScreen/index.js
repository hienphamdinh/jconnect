import React from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import BackComponent from 'components/BackComponent';
import Container from 'components/Container';
export default function EnterEmailScreen() {
  const navigation = useNavigation();
  const onPressNext = () => {
    navigation.navigate('EnterPasswordScreen');
  };
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
                autoCapitalize={false}
                keyboardType="email-address"
                textContentType="emailAddress"
              />
            </View>
            <TouchableOpacity style={styles.loginButton} onPress={onPressNext}>
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
