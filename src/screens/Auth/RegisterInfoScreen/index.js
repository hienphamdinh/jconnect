import React from 'react';
import {Text, View, ScrollView, TextInput, Keyboard} from 'react-native';
import Container from 'components/Container';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {WIDTH_RATIO} from 'themes/Dimens';
import OpacityButton from 'components/OpacityButton';
import InputBox from './components/InputBox';

export default function RegisterInfoScreen() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const onPressNext = () => {
    navigation.navigate('EnterPasswordScreen');
  };
  return (
    <Container style={styles.container} notSafeArea>
      <View
        style={[
          styles.header,
          {
            height: (insets.top + 100) * WIDTH_RATIO,
          },
        ]}>
        <OpacityButton
          style={styles.iconWrapper}
          onPress={() => {
            console.log('KKKK');
          }}>
          <EntypoIcons name="camera" size={30} />
          <EntypoIcons
            name="circle-with-plus"
            // color="white"
            size={20}
            style={styles.plusIcon}
          />
        </OpacityButton>
      </View>
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <InputBox
          title="Email"
          placeholder="Email"
          autoCapitalize={false}
          keyboardType="email-address"
          textContentType="emailAddress"
        />
        <InputBox
          title="Email"
          autoCapitalize={false}
          placeholder="Email"
          keyboardType="email-address"
          textContentType="emailAddress"
        />
        <InputBox
          title="Email"
          autoCapitalize={false}
          placeholder="Email"
          keyboardType="email-address"
          textContentType="emailAddress"
        />
        <InputBox
          title="Enter your email"
          autoCapitalize={false}
          placeholder="Email"
          keyboardType="email-address"
          textContentType="emailAddress"
        />
      </ScrollView>
    </Container>
  );
}
