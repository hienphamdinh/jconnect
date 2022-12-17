import Container from 'components/Container';
import React from 'react';
import {ScrollView} from 'react-native';
import HeaderProfile from './components/HeaderProfile';
import AboutMe from './components/AboutMe';
import SkillBlock from './components/SkillBlock';
import CompanyInfoBlock from './components/CompanyInfoBlock';
import useProfileHook from './hook';
import Fetching from 'components/Fetching';
import styles from './styles';

export default function MyProfileScreen(props) {
  const {isCompany, profile, loading, updateUser} = useProfileHook(props);

  if (loading) {
    return <Fetching />;
  }

  return (
    <Container showBack>
      <ScrollView style={styles.container}>
        <HeaderProfile profile={profile} isCompany={isCompany} />
        {profile ? <AboutMe profile={profile} updateUser={updateUser} /> : null}
        {profile && !isCompany ? (
          <SkillBlock profile={profile} updateUser={updateUser} />
        ) : null}
        {isCompany && profile && <CompanyInfoBlock profile={profile} />}
      </ScrollView>
    </Container>
  );
}
