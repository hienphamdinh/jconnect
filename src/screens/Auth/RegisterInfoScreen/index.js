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
import CheckButton from 'components/CheckButton';
import {MALE, FEMALE} from 'constants/Gender';

export default function RegisterInfoScreen() {
  const {
    insets,
    activeToggle,
    gender,
    onPressToggle,
    onPressJoin,
    onPressGenderMale,
    onPressGenderFeMale,
  } = useRegisterHook();
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
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <InputBox
          title="Full name"
          placeholder="Pham Dinh Hien"
          keyboardType="default"
          textContentType="none"
          requireValue
        />
        <InputBox
          title="Year of Birth"
          editable={false}
          placeholder="Year of Birth"
          keyboardType="numeric"
          textContentType="none"
          requireValue
        />
        <InputBox
          title="Phone"
          placeholder="Phone number"
          keyboardType="phone-pad"
          textContentType="emailAddress"
          requireValue
        />
        <InputBox
          title="Location"
          placeholder="Current location"
          keyboardType="default"
          textContentType="none"
          requireValue
        />
        <View style={styles.switchContainer}>
          <CheckButton
            title="Male"
            onPress={onPressGenderMale}
            active={gender === MALE}
          />
          <CheckButton
            title="Female"
            onPress={onPressGenderFeMale}
            active={gender === FEMALE}
          />
        </View>
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
              placeholder="Current university/school"
              keyboardType="default"
              textContentType="none"
            />
            <View style={styles.educationYear}>
              <InputBox
                style={styles.inputItem}
                title="Start year"
                placeholder="Start year"
                keyboardType="numeric"
                textContentType="none"
              />
              <View style={styles.divider} />
              <InputBox
                style={styles.inputItem}
                title="End year"
                placeholder="End year"
                keyboardType="numeric"
                textContentType="none"
              />
            </View>
          </>
        ) : (
          <>
            <InputBox
              title="Most recently job"
              placeholder="Email"
              keyboardType="phone-pad"
              textContentType="emailAddress"
            />
            <InputBox
              title="Most recently company"
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
