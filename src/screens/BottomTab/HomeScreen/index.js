import React from 'react';
import Container from 'components/Container';
import HeaderBar from 'components/HeaderBar';
import PostItemComponent from 'components/PostItemComponent';
import Categories from 'components/Categories';
import {useSelector} from 'react-redux';
import styles from './styles';
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function HomeScreen() {
  const renderItem = ({item, index}) => <PostItemComponent item={item} />;
  const userInfo = useSelector(state => state.user);

  return (
    <Container notSafeArea>
      <HeaderBar />
      <Categories />
    </Container>
  );
}
