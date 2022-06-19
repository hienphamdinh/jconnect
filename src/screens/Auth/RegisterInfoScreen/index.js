import React from 'react';
import {View, ScrollView, Text, TouchableOpacity} from 'react-native';
import Container from 'components/Container';
import styles from './styles';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import {WIDTH_RATIO} from 'themes/Dimens';
import OpacityButton from 'components/OpacityButton';
import InputBox from 'components/InputBox';
import SwitchComponent from 'components/SwitchComponent';
import useRegisterHook from './hook';
import PrimaryButton from 'components/PrimaryButton';
import BackComponent from 'components/BackComponent';
export default function RegisterInfoScreen() {
  const {insets, activeToggle, onPressToggle, onPressJoin} = useRegisterHook();
  return (
    <Container style={styles.container} notSafeArea>
      <BackComponent />
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
            size={20}
            style={styles.plusIcon}
          />
        </OpacityButton>
      </View>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <InputBox
          title="Full name"
          placeholder="Pham Dinh Hien"
          autoCapitalize={false}
          keyboardType="email-address"
          textContentType="emailAddress"
        />
        <InputBox
          title="Birthday"
          autoCapitalize={false}
          editable={false}
          placeholder="Email"
          keyboardType="email-address"
          textContentType="emailAddress"
        />
        <InputBox
          title="Phone"
          autoCapitalize={false}
          placeholder="Email"
          keyboardType="phone-pad"
          textContentType="emailAddress"
        />
        <InputBox
          title="Location"
          autoCapitalize={false}
          placeholder="Email"
          keyboardType="email-address"
          textContentType="emailAddress"
        />
        <View style={styles.switchContainer}>
          <Text style={styles.textSwitch}>I'm a student</Text>
          <SwitchComponent
            active={activeToggle}
            onPressToggle={onPressToggle}
          />
        </View>
        {activeToggle ? (
          <>
            <InputBox
              title="University/School"
              autoCapitalize={false}
              placeholder="Email"
              keyboardType="email-address"
              textContentType="emailAddress"
            />
            <View style={styles.educationYear}>
              <InputBox
                style={styles.inputItem}
                title="Start year"
                autoCapitalize={false}
                placeholder="Email"
                keyboardType="phone-pad"
                textContentType="emailAddress"
              />
              <View style={styles.divider} />
              <InputBox
                style={styles.inputItem}
                title="End year"
                autoCapitalize={false}
                placeholder="Email"
                keyboardType="email-address"
                textContentType="emailAddress"
              />
            </View>
          </>
        ) : (
          <>
            <InputBox
              title="Most recently job"
              autoCapitalize={false}
              placeholder="Email"
              keyboardType="phone-pad"
              textContentType="emailAddress"
            />
            <InputBox
              title="Most recently company"
              autoCapitalize={false}
              placeholder="Email"
              keyboardType="email-address"
              textContentType="emailAddress"
            />
          </>
        )}
        <PrimaryButton title={'Join'} onPress={onPressJoin} />
      </ScrollView>
    </Container>
  );
}
