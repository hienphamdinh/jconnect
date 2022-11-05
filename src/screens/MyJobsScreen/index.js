import Container from 'components/Container';
import React from 'react';
import HeaderTitle from 'components/HeaderTitle';
import MyJobsTab from './components/MyJobsTab';
import styles from './styles';
export default function MyJobsScreen() {
  return (
    <Container showBack backButtonStyle={styles.backButtonStyle}>
      <HeaderTitle title={'My jobs'} style={styles.header} />
      <MyJobsTab />
    </Container>
  );
}
