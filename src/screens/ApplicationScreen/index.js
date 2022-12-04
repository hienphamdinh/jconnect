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
import PrimaryButton from 'components/PrimaryButton';

export default function ApplicationScreen(props) {
  const userInfo = useSelector(state => get(state, 'user.info'));
  const {formRef, loading, onResumeChange, onPressSubmit} = useApplyHook(props);
  return (
    <Container showBack>
      <HeaderTitle title={'Apply this job'} />
      <Formik
        innerRef={formRef}
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
          fullName: yup.string().required('* Please fill information'),
          email: yup
            .string()
            .required('* Please select birthday')
            .matches(
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g,
              '* Email is invalid',
            ),
          phone: yup
            .string()
            .max(11, '* Max length is 11')
            .matches(/(84|0[0-9])+([0-9]{8,9})\b/g, '* Phone is invalid')
            .required('* Please fill information'),
          cv: yup.object({
            url: yup.string().required('* Please fill information'),
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
                keyboardType="number-pad"
                textContentType="none"
                maxLength={11}
                requireValue
                onChangeText={handleChange('phone')}
                error={!!values.phone && errors.phone}
                onFocus={() => setFieldTouched('phone')}
              />
              <Text style={styles.heading}>Resume</Text>
              <ResumeList
                initResume={get(userInfo, 'applicationInfo.cv')}
                onResumeChange={onResumeChange}
                onPressUpload={() => setFieldTouched('cv')}
              />
              <View style={styles.footer}>
                <PrimaryButton
                  title={'Submit'}
                  onPress={onPressSubmit}
                  disable={!isValid}
                  loading={loading}
                />
              </View>
            </View>
          );
        }}
      </Formik>
    </Container>
  );
}
