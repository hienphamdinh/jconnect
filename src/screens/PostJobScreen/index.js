import React from 'react';
import {View, ScrollView, Text} from 'react-native';
import Container from 'components/Container';
import styles from './styles';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import OpacityButton from 'components/OpacityButton';
import InputBox, {DateInputBox, LocationInputBox} from 'components/InputBox';
import usePostJob from './hook';
import PrimaryButton from 'components/PrimaryButton';
import ImagePickerComponent from 'components/ImagePickerComponent';
import {Formik} from 'formik';
import * as yup from 'yup';
import FastImage from 'react-native-fast-image';
import Loading from 'components/Loading';
import HeaderTitle from 'components/HeaderTitle';
import get from 'lodash/get';

export default function PostJobScreen(props) {
  const {
    formRef,
    valid,
    openImagePicker,
    avatar,
    loading,
    onCloseImagePicker,
    onOpenImagePicker,
    setIsValid,
    onPressJoin,
    onSelectedAvatar,
  } = usePostJob(props);
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
        fullName: yup.string().required('* Vui lòng điền thông tin'),
        birthDay: yup.string().required('* Vui lòng chọn ngày sinh nhật'),
        phone: yup
          .string()
          .max(11, '* Tối đa 11 ký tự')
          .matches(
            /(84|0[0-9])+([0-9]{8,9})\b/g,
            '* Số điện thoại không đúng định dạng',
          )
          .required('* Vui lòng điền thông tin'),
        city: yup.string().required('* Vui lòng điền thông tin'),
        address: yup.string(),
        gender: yup.string().required('* Vui lòng chọn giới tính'),
        mostRecentlyJob: yup.string(),
        mostRecentlyCompany: yup.string(),
        schoolName: yup.string(),
        startYear: yup.string(),
        endYear: yup.string(),
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
            <HeaderTitle title={'Create new job'} />
            <ScrollView
              style={styles.scrollView}
              contentContainerStyle={styles.contentContainerStyle}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}>
              <View style={styles.avatarContainer}>
                {avatar ? (
                  <OpacityButton
                    onPress={onOpenImagePicker}
                    style={styles.iconWrapper}>
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
                    <EntypoIcons name="camera" size={30} color="black" />
                  </OpacityButton>
                )}
                <Text style={styles.textThumbnail}>
                  {
                    'Add the job thumbnail. If no, default\nthumbnail will be applied.'
                  }
                </Text>
              </View>
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
