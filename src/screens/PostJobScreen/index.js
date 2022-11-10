import React from 'react';
import {View, ScrollView, Text} from 'react-native';
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

export default function PostJobScreen(props) {
  const {
    formRef,
    valid,
    openImagePicker,
    thumbnail,
    loading,
    onCloseImagePicker,
    onOpenImagePicker,
    setIsValid,
    onPressJoin,
    onSelectedAvatar,
  } = usePostJob(props);
  const initForm = get(props, 'route.params.initForm');
  const categories = useSelector(state =>
    get(state, 'categories.listCategories'),
  );

  return (
    <Formik
      innerRef={formRef}
      onSubmit={values => {}}
      initialValues={initForm || {}}
      validateOnMount
      validationSchema={yup.object().shape({
        thumbnail: yup.string(),
        jobName: yup.string().required('* Vui lòng điền thông tin'),
        categories: yup.string().required('* Vui lòng chọn danh mục'),
        jobType: yup.string().required('* Vui lòng chọn loại'),
        city: yup.string().required('* Vui lòng chọn thành phố'),
        salary: yup
          .string()
          .max(9, '* Số tiền quá lớn')
          .required('* Vui lòng nhập lương'),
        expiredApply: yup.string().required('* Vui lòng chọn hạn ứng tuyển'),
        street: yup.string(),
        description: yup.string().required('* Vui lòng nhập mô tả công việc'),
        requirement: yup.string().required('* Vui lòng nhập yêu cầu công việc'),
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
                {thumbnail ? (
                  <OpacityButton
                    onPress={onOpenImagePicker}
                    style={styles.iconWrapper}>
                    <FastImage
                      source={{
                        uri: get(thumbnail, 'node.image.uri'),
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
              <BaseInputBox
                title="Category"
                placeholder="Select job category"
                keyboardType="default"
                textContentType="none"
                requireValue
                onSelect={handleChange('categories')}
                error={!!values.categories && errors.categories}
                onFocus={() => setFieldTouched('categories')}
                listData={categories}
                showKey="title"
                selectKey="_id"
              />
              <BaseInputBox
                title="Job type"
                placeholder="Select job category"
                keyboardType="default"
                textContentType="none"
                requireValue
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
                title={'Create'}
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
