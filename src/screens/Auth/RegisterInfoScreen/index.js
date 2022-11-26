import React from 'react';
import {View, ScrollView, Text} from 'react-native';
import Container from 'components/Container';
import styles from './styles';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import {WIDTH_RATIO} from 'themes/Dimens';
import OpacityButton from 'components/OpacityButton';
import InputBox, {DateInputBox, LocationInputBox} from 'components/InputBox';
import SwitchComponent from 'components/SwitchComponent';
import useRegisterHook from './hook';
import PrimaryButton from 'components/PrimaryButton';
import CheckButton from 'components/CheckButton';
import ImagePickerComponent from 'components/ImagePickerComponent';
import {Formik} from 'formik';
import * as yup from 'yup';
import {MALE, FEMALE} from 'constants/Gender';
import FastImage from 'react-native-fast-image';
import Loading from 'components/Loading';
import get from 'lodash/get';

export default function RegisterInfoScreen(props) {
  const {
    insets,
    activeToggle,
    gender,
    formRef,
    valid,
    openImagePicker,
    avatar,
    loading,
    checkFullValue,
    onCloseImagePicker,
    onOpenImagePicker,
    setIsValid,
    onPressToggle,
    onPressJoin,
    onPressGender,
    onSelectedAvatar,
  } = useRegisterHook(props);

  const initForm = get(props, 'route.params.initForm');
  if (loading) {
    return <Loading />;
  }
  return (
    <Formik
      innerRef={formRef}
      onSubmit={values => {}}
      initialValues={initForm || {}}
      validateOnMount
      validationSchema={yup.object().shape({
        fullName: yup.string().required('* Please enter full name'),
        birthDay: yup.string().required('* Please enter birthday'),
        phone: yup
          .string()
          .max(11, '* Max length is 11')
          .matches(/(84|0[0-9])+([0-9]{8,9})\b/g, '* Phone not is invalid')
          .required('* Please enter phone'),
        city: yup.string().required('* Please select city'),
        address: yup.string(),
        gender: yup.string().required('* Please enter gender'),
        mostRecentlyJob: activeToggle
          ? yup.string()
          : yup.string().required('* Please enter most recently job'),
        mostRecentlyCompany: activeToggle
          ? yup.string()
          : yup.string().required('* Please enter most recently company'),
        schoolName: !activeToggle
          ? yup.string()
          : yup.string().required('* Please enter school'),
        startYear: !activeToggle
          ? yup.string()
          : yup.string().required('* Please select start year'),
        endYear: !activeToggle
          ? yup.string()
          : yup.string().required('* Please select end year'),
      })}>
      {({
        isValid,
        handleSubmit,
        values,
        isSubmitting,
        handleChange,
        errors,
        setFieldTouched,
        touched,
      }) => {
        setIsValid(isValid);
        return (
          <Container style={styles.container} notSafeArea showBack>
            <View
              style={[
                styles.header,
                {
                  height: (insets.top + 100) * WIDTH_RATIO,
                },
              ]}>
              {avatar ? (
                <OpacityButton onPress={onOpenImagePicker}>
                  <FastImage
                    source={{
                      uri: get(avatar, 'node.image.uri'),
                    }}
                    style={styles.avatar}
                  />
                </OpacityButton>
              ) : (
                <OpacityButton
                  style={styles.iconWrapper}
                  onPress={onOpenImagePicker}>
                  <EntypoIcons name="camera" size={30} />
                </OpacityButton>
              )}
            </View>
            <ScrollView
              style={styles.scrollView}
              contentContainerStyle={styles.contentContainerStyle}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}>
              <InputBox
                title="Full name"
                placeholder="Nguyen Van A"
                keyboardType="default"
                textContentType="none"
                requireValue
                value={values.fullName}
                onChangeText={handleChange('fullName')}
                error={!!values.fullName && errors.fullName}
                onFocus={() => setFieldTouched('fullName')}
              />
              <DateInputBox
                title="Birthday"
                placeholder="Choose your birthday"
                requireValue
                value={values.birthDay}
                onChangeDate={handleChange('birthDay')}
                maximumDate={new Date()}
                error={!!values.birthDay && errors.birthDay}
                onFocus={() => setFieldTouched('birthDay')}
              />
              <InputBox
                title="Phone"
                placeholder="+84"
                keyboardType="phone-pad"
                textContentType="emailAddress"
                requireValue
                maxLength={11}
                value={values.phone}
                onChangeText={handleChange('phone')}
                error={!!values.phone && errors.phone}
                onFocus={() => setFieldTouched('phone')}
              />
              <LocationInputBox
                title="City/Province"
                placeholder="Current city"
                keyboardType="default"
                textContentType="none"
                requireValue
                value={values.city}
                onSelect={handleChange('city')}
                error={!!values.city && errors.city}
                onFocus={() => setFieldTouched('city')}
              />
              <InputBox
                title="Address"
                placeholder="48 Tran Xuan Soan"
                keyboardType="default"
                textContentType="none"
                value={values.address}
                onChangeText={handleChange('address')}
                error={!!values.address && errors.address}
                onFocus={() => setFieldTouched('address')}
              />
              <View style={styles.switchContainer}>
                <CheckButton
                  title="Male"
                  onPress={() => onPressGender(MALE)}
                  active={gender === MALE}
                />
                <CheckButton
                  title="Female"
                  onPress={() => onPressGender(FEMALE)}
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
                    value={values.schoolName}
                    onChangeText={handleChange('schoolName')}
                    error={!!values.schoolName && errors.schoolName}
                    onFocus={() => setFieldTouched('schoolName')}
                    requireValue
                  />
                  <View style={styles.educationYear}>
                    <DateInputBox
                      style={styles.inputItem}
                      title="Start year"
                      placeholder="Start year"
                      keyboardType="numeric"
                      textContentType="none"
                      value={values.startYear}
                      onChangeDate={handleChange('startYear')}
                      error={!!values.startYear && errors.startYear}
                      onFocus={() => setFieldTouched('startYear')}
                      requireValue
                    />
                    <View style={styles.divider} />
                    <DateInputBox
                      style={styles.inputItem}
                      title="End year"
                      placeholder="End year"
                      keyboardType="numeric"
                      textContentType="none"
                      value={values.endYear}
                      onChangeDate={handleChange('endYear')}
                      error={!!values.endYear && errors.endYear}
                      onFocus={() => setFieldTouched('endYear')}
                      requireValue
                    />
                  </View>
                </>
              ) : (
                <>
                  <InputBox
                    title="Most recently job"
                    placeholder="Recently job"
                    textContentType="emailAddress"
                    value={values.mostRecentlyJob}
                    onChangeText={handleChange('mostRecentlyJob')}
                    error={!!values.mostRecentlyJob && errors.mostRecentlyJob}
                    onFocus={() => setFieldTouched('mostRecentlyJob')}
                    requireValue
                  />
                  <InputBox
                    title="Most recently company"
                    placeholder="Recently company"
                    textContentType="emailAddress"
                    value={values.mostRecentlyCompany}
                    onChangeText={handleChange('mostRecentlyCompany')}
                    error={
                      !!values.mostRecentlyCompany && errors.mostRecentlyCompany
                    }
                    onFocus={() => setFieldTouched('mostRecentlyCompany')}
                    requireValue
                  />
                </>
              )}
              <PrimaryButton
                title={'Join'}
                onPress={onPressJoin}
                disable={!valid}
              />
            </ScrollView>
            <ImagePickerComponent
              visible={openImagePicker}
              onClose={onCloseImagePicker}
              onSelectItem={onSelectedAvatar}
              selected={avatar}
            />
          </Container>
        );
      }}
    </Formik>
  );
}
