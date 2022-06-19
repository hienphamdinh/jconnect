import React from 'react';
import Container from 'components/Container';
import SearchBar from 'components/HeaderBar';
import FloatingActionButton from 'components/FloatingActionButton';
import styles from './styles';

export default function HomeScreen() {
  return (
    <Container notSafeArea>
      <SearchBar />
      <FloatingActionButton />
    </Container>
  );
}
