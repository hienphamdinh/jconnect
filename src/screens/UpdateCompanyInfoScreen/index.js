import React from 'react';
import {View, ScrollView} from 'react-native';
import Container from 'components/Container';
import styles from './styles';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import {WIDTH_RATIO} from 'themes/Dimens';
import OpacityButton from 'components/OpacityButton';
import InputBox, {
  DateInputBox,
  LocationInputBox,
  SalaryBox,
} from 'components/InputBox';
import useRegisterHook from './hook';
import PrimaryButton from 'components/PrimaryButton';
import ImagePickerComponent from 'components/ImagePickerComponent';
import {Formik} from 'formik';
import * as yup from 'yup';
import FastImage from 'react-native-fast-image';
import {formatCurrencyWithDot} from 'utils/CurrencyHelper';
import get from 'lodash/get';

export default function UpdateCompanyInfoScreen(props) {
  const {
    insets,
    formRef,
    valid,
    openImagePicker,
    avatar,
    loading,
    userInfo,
    onCloseImagePicker,
    onOpenImagePicker,
    setIsValid,
    onPressJoin,
    onSelectedAvatar,
  } = useRegisterHook(props);

  return (
    <Formik
      innerRef={formRef}
      onSubmit={values => {}}
      initialValues={{
        fullName: get(userInfo, 'fullName'),
        phone: get(userInfo, 'contact.phone'),
        email: get(userInfo, 'contact.email'),
        city: get(userInfo, 'city'),
        address: get(userInfo, 'address'),
        website: get(userInfo, 'company.website'),
        foundedYear: get(userInfo, 'company.foundedYear'),
        amountEmployee: get(userInfo, 'company.amountEmployee'),
      }}
      validateOnMount
      validationSchema={yup.object().shape({
        fullName: yup.string().required('* Please enter full name'),
        phone: yup
          .string()
          .max(11, '* Max length is 11')
          .matches(/(84|0[0-9])+([0-9]{8,9})\b/g, '* Phone not is invalid')
          .required('* Please enter phone'),
        email: yup
          .string()
          .matches(
            /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
            '* Email not is invalid',
          )
          .required('* Please enter email'),
        city: yup.string().required('* Please select city'),
        address: yup.string(),
        website: yup.string(),
        foundedYear: yup.string().required('* Please select founded year'),
        amountEmployee: yup.string().required('* Please fill amount employee'),
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
                      uri: get(avatar, 'node.image.uri') || avatar,
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
              bounces={false}
              style={styles.scrollView}
              contentContainerStyle={styles.contentContainerStyle}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}>
              <InputBox
                title="Company name"
                placeholder="Facebook, Google..."
                keyboardType="default"
                textContentType="none"
                requireValue
                value={values.fullName}
                onChangeText={handleChange('fullName')}
                error={!!values.fullName && errors.fullName}
                onFocus={() => setFieldTouched('fullName')}
              />
              <InputBox
                title="Company phone"
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
              <InputBox
                title="Company email"
                placeholder="google@gmail.com"
                keyboardType="default"
                textContentType="none"
                value={values.email}
                onChangeText={handleChange('email')}
                error={!!values.email && errors.email}
                onFocus={() => setFieldTouched('email')}
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
              <InputBox
                title="Website"
                placeholder="https://Google.com"
                keyboardType="default"
                textContentType="none"
                value={values.website}
                onChangeText={handleChange('website')}
                error={!!values.website && errors.website}
                onFocus={() => setFieldTouched('website')}
              />

              <DateInputBox
                style={styles.inputItem}
                title="Founded year"
                placeholder="23/06/2000"
                keyboardType="numeric"
                textContentType="none"
                value={values.foundedYear}
                onChangeDate={handleChange('foundedYear')}
                error={!!values.foundedYear && errors.foundedYear}
                onFocus={() => setFieldTouched('foundedYear')}
                requireValue
              />
              <SalaryBox
                title="Amount employee"
                placeholder="Enter salary"
                keyboardType="number-pad"
                requireValue
                autoCapitalize="none"
                value={formatCurrencyWithDot(values.amountEmployee)}
                onChangeText={handleChange('amountEmployee')}
                error={!!values.amountEmployee && errors.amountEmployee}
                onFocus={() => setFieldTouched('amountEmployee')}
                showUnit={false}
              />

              <PrimaryButton
                title={'Update'}
                onPress={onPressJoin}
                disable={!valid}
                loading={loading}
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
