import Container from 'components/Container';
import React from 'react';
import {ScrollView} from 'react-native';
import HeaderProfile from './components/HeaderProfile';
import useProfileHook from './hook';
import styles from './styles';

export default function MyProfileScreen(props) {
  const {profile} = useProfileHook(props);
  return (
    <Container showBack>
      <ScrollView style={styles.container}>
        <HeaderProfile profile={profile} />
      </ScrollView>
    </Container>
  );
}
