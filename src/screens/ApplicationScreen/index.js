import Container from 'components/Container';
import React from 'react';
import {View, Text} from 'react-native';
import InputBox from 'components/InputBox';
import {useSelector} from 'react-redux';
import HeaderTitle from 'components/HeaderTitle';
import get from 'lodash/get';
import styles from './styles';
import {Formik} from 'formik';
import * as yup from 'yup';
import useApplyHook from './hook';
import ResumeList from 'components/ResumeList';

export default function ApplicationScreen() {
  const userInfo = useSelector(state => get(state, 'user.info'));
  const {formRef, onResumeChange} = useApplyHook();
  return (
    <Container showBack>
      <HeaderTitle title={'Apply this job'} />
      <Formik
        innerRef={formRef}
        onSubmit={values => {}}
        initialValues={{
          fullName: get(userInfo, 'fullName'),
          email:
            get(userInfo, 'applicationInfo.email') ||
            get(userInfo, 'account.email'),
          phone: get(userInfo, 'applicationInfo.phone'),
          cv: get(userInfo, 'applicationInfo.cv'),
        }}
        validateOnMount
        validationSchema={yup.object().shape({
          fullName: yup.string().required('* Vui lòng điền thông tin'),
          email: yup.string().required('* Vui lòng chọn ngày sinh nhật'),
          phone: yup
            .string()
            .max(11, '* Tối đa 11 ký tự')
            .matches(
              /(84|0[0-9])+([0-9]{8,9})\b/g,
              '* Số điện thoại không đúng định dạng',
            )
            .required('* Vui lòng điền thông tin'),
          cv: yup.object({
            url: yup.string().required('* Vui lòng điền thông tin'),
            name: yup.string(),
          }),
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
          return (
            <View style={styles.container}>
              <Text style={styles.heading}>Contact info</Text>
              <InputBox
                value={values.fullName}
                title="Full name"
                placeholder="Full name"
                keyboardType="default"
                textContentType="none"
                requireValue
                onChangeText={handleChange('fullName')}
                error={!!values.fullName && errors.fullName}
                onFocus={() => setFieldTouched('fullName')}
              />
              <InputBox
                value={values.email}
                title="Email"
                placeholder="Your contact email"
                keyboardType="default"
                textContentType="none"
                requireValue
                onChangeText={handleChange('email')}
                error={!!values.email && errors.email}
                onFocus={() => setFieldTouched('email')}
              />
              <InputBox
                value={values.phone}
                title="Phone"
                placeholder="Your contact phone"
                keyboardType="default"
                textContentType="none"
                requireValue
                onChangeText={handleChange('phone')}
                error={!!values.phone && errors.phone}
                onFocus={() => setFieldTouched('phone')}
              />
              <Text style={styles.heading}>Resume</Text>
              <ResumeList
                initResume={get(values, 'cv.name')}
                onResumeChange={onResumeChange}
                onPressUpload={() => setFieldTouched('cv')}
              />
            </View>
          );
        }}
      </Formik>
    </Container>
  );
}
