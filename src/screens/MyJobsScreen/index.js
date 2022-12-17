import Container from 'components/Container';
import React from 'react';
import HeaderTitle from 'components/HeaderTitle';
import MyJobsTab from './components/MyJobsTab';
import get from 'lodash/get';
import useCompanyHooks from 'hooks/useCompanyHook';
import MyPostedJob from './components/MyJobsTab/MyPostedJob';
import styles from './styles';
export default function MyJobsScreen(props) {
  const {isCompany} = useCompanyHooks();

  const initTab = get(props, 'route.params.initTab', 0);
  return (
    <Container showBack backButtonStyle={styles.backButtonStyle}>
      <HeaderTitle title={'My jobs'} style={styles.header} />
      {isCompany ? (
        <MyPostedJob forceCall={true} />
      ) : (
        <MyJobsTab initTabIndex={initTab} />
      )}
    </Container>
  );
}
