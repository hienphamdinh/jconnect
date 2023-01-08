import React from 'react';
import {View, ScrollView, Text, Image} from 'react-native';
import Container from 'components/Container';
import styles from './styles';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import OpacityButton from 'components/OpacityButton';
import InputBox, {
  DateInputBox,
  LocationInputBox,
  EditorInputBox,
  BaseInputBox,
  SalaryBox,
  CategoryBox,
} from 'components/InputBox';
import usePostJob from './hook';
import PrimaryButton from 'components/PrimaryButton';
import ImagePickerComponent from 'components/ImagePickerComponent';
import {Formik} from 'formik';
import * as yup from 'yup';
import FastImage from 'react-native-fast-image';
import HeaderTitle from 'components/HeaderTitle';
import get from 'lodash/get';
import {jobTypeList} from 'constants/Job';
import {useSelector} from 'react-redux';
import {formatCurrencyWithDot} from 'utils/CurrencyHelper';

export default function UpdateJobScreen(props) {
  const {
    valid,
    formRef,
    openImagePicker,
    thumbnail,
    loading,
    jobDetail,
    fetching,
    onCloseImagePicker,
    onOpenImagePicker,
    setIsValid,
    onPressJoin,
    onSelectedAvatar,
  } = usePostJob(props);

  const categories = useSelector(state =>
    get(state, 'categories.listCategories'),
  );

  if (fetching) {
    return null;
  }

  return (
    <Formik
      innerRef={formRef}
      onSubmit={values => {}}
      initialValues={jobDetail || {}}
      validateOnMount
      validationSchema={yup.object().shape({
        thumbnail: yup.string(),
        jobName: yup.string().required('* Please enter job name'),
        categories: yup.object().required('* Please select category'),
        jobType: yup.string().required('* Please select job type'),
        city: yup.string().required('* Please select city'),
        salary: yup
          .string()
          .max(9, '* Money is very small')
          .required('* Please enter salary'),
        expiredApply: yup.string().required('* Select expired time'),
        street: yup.string(),
        description: yup.string().required('* Please enter description'),
        requirement: yup.string().required('* Please enter requirement'),
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
            <HeaderTitle title={'Detail my job'} />
            <ScrollView
              style={styles.scrollView}
              contentContainerStyle={styles.contentContainerStyle}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}>
              <View style={styles.avatarContainer}>
                {thumbnail ? (
                  <OpacityButton
                    onPress={onOpenImagePicker}
                    style={styles.iconWrapper}>
                    <Image
                      source={{
                        uri: get(thumbnail, 'node.image.uri') || thumbnail,
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
                title="Job name"
                placeholder="Enter job name"
                keyboardType="default"
                requireValue
                autoCapitalize="none"
                value={values.jobName}
                onChangeText={handleChange('jobName')}
                error={!!values.jobName && errors.jobName}
                onFocus={() => setFieldTouched('jobName')}
              />
              <CategoryBox
                title="Category"
                placeholder="Select job category"
                keyboardType="default"
                textContentType="none"
                requireValue
                onSelect={item =>
                  formRef.current.setFieldValue('categories', item)
                }
                value={values?.categories}
                error={!!values.categories && errors.categories}
                onFocus={() => setFieldTouched('categories')}
                listData={categories}
                popupTitle="Select category"
              />
              <BaseInputBox
                title="Job type"
                popupTitle="Select job type"
                placeholder="Select job type"
                keyboardType="default"
                textContentType="none"
                requireValue
                value={values?.jobType}
                onSelect={handleChange('jobType')}
                error={!!values.jobType && errors.jobType}
                onFocus={() => setFieldTouched('jobType')}
                listData={jobTypeList}
              />
              <SalaryBox
                title="Salary"
                placeholder="Enter salary"
                keyboardType="number-pad"
                requireValue
                autoCapitalize="none"
                value={formatCurrencyWithDot(values.salary)}
                onChangeText={handleChange('salary')}
                error={!!values.salary && errors.salary}
                onFocus={() => setFieldTouched('salary')}
              />
              <DateInputBox
                title="Expired applied"
                placeholder="Choose job expired applied"
                requireValue
                value={values.expiredApply}
                onChangeDate={handleChange('expiredApply')}
                error={!!values.expiredApply && errors.expiredApply}
                onFocus={() => setFieldTouched('expiredApply')}
                minimumDate={new Date()}
              />
              <EditorInputBox
                title="Job description"
                placeholder="Press open editor"
                requireValue
                value={values.description}
                onChange={handleChange('description')}
                error={!!values.description && errors.description}
                onFocus={() => setFieldTouched('description')}
              />
              <EditorInputBox
                title="Job requirement"
                placeholder="Press open editor"
                requireValue
                value={values.requirement}
                onChange={handleChange('requirement')}
                error={!!values.requirement && errors.requirement}
                onFocus={() => setFieldTouched('requirement')}
              />

              <LocationInputBox
                title="City/Province"
                placeholder="Job city"
                keyboardType="default"
                textContentType="none"
                requireValue
                value={values.city}
                onSelect={handleChange('city')}
                error={!!values.city && errors.city}
                onFocus={() => setFieldTouched('city')}
              />
              <InputBox
                title="Street"
                placeholder="48 Tran Xuan Soan"
                keyboardType="default"
                textContentType="none"
                value={values.street}
                onChangeText={handleChange('street')}
                error={!!values.street && errors.street}
                onFocus={() => setFieldTouched('street')}
              />
              <InputBox
                title="Contact"
                placeholder="+84"
                keyboardType="phone-pad"
                maxLength={11}
                value={values.contact}
                onChangeText={handleChange('contact')}
                error={!!values.contact && errors.contact}
                onFocus={() => setFieldTouched('contact')}
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
              selected={thumbnail}
            />
          </Container>
        );
      }}
    </Formik>
  );
}
