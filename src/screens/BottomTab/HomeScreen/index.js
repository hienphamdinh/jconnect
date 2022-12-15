import React from 'react';
import Container from 'components/Container';
import HeaderBar from 'components/HeaderBar';
import HomeHotJob from './components/HomeHotJob';
import PostJobBubble from 'components/PostJobBubble';
import styles from './styles';

export default function HomeScreen() {
  return (
    <Container notSafeArea style={styles.container}>
      <HeaderBar />
      <HomeHotJob />
      <PostJobBubble />
    </Container>
  );
}
