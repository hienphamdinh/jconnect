import React from 'react';
import {FlatList, View} from 'react-native';
import Container from 'components/Container';
import HeaderBar from 'components/HeaderBar';
import FloatingActionButton from 'components/FloatingActionButton';
import PostItemComponent from 'components/PostItemComponent';
import {useSelector} from 'react-redux';
import FastImage from 'react-native-fast-image';
import styles from './styles';
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function HomeScreen() {
  const renderItem = ({item, index}) => <PostItemComponent item={item} />;
  const userInfo = useSelector(state => state.user);
  console.log('user', userInfo);
  return (
    <Container notSafeArea>
      <HeaderBar />
      <FloatingActionButton />
      <FlatList
        style={styles.flatList}
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.contentContainerStyle}
        ItemSeparatorComponent={() => <View style={styles.divider} />}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}
