import Container from 'components/Container';
import React from 'react';
import HeaderTitle from 'components/HeaderTitle';
import MyJobsTab from './components/MyJobsTab';
import get from 'lodash/get';
import styles from './styles';
export default function MyJobsScreen(props) {
  const initTab = get(props, 'route.params.initTab', 0);
  return (
    <Container showBack backButtonStyle={styles.backButtonStyle}>
      <HeaderTitle title={'My jobs'} style={styles.header} />
      <MyJobsTab initTabIndex={initTab} />
    </Container>
  );
}
