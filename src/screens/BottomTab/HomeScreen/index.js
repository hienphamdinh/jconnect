import React from 'react';
import Container from 'components/Container';
import HeaderBar from 'components/HeaderBar';
import PostItemComponent from 'components/PostItemComponent';
import Categories from 'components/Categories';
import HomeBanner from './components/HomeBanner';
import HomeHotJob from './components/HomeHotJob';
import {useSelector} from 'react-redux';
import styles from './styles';
import {ScrollView} from 'react-native';
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function HomeScreen() {
  const renderItem = ({item, index}) => <PostItemComponent item={item} />;
  const userInfo = useSelector(state => state.user);

  return (
    <Container notSafeArea style={styles.container}>
      <HeaderBar />
      <ScrollView
        style={styles.scrollView}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        {/* <Categories /> */}
        <HomeBanner />
        <HomeHotJob />
      </ScrollView>
    </Container>
  );
}
