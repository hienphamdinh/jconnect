import React from 'react';
import {View, FlatList} from 'react-native';
import Container from 'components/Container';
import NormalHeaderBar from 'components/NormalHeaderBar';
import MessageItemComponent from './components/MessageItemComponent';
import styles from './styles';
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
export default function Messages() {
  const renderItem = ({item, index}) => <MessageItemComponent item={item} />;
  return (
    <Container notSafeArea>
      <NormalHeaderBar />
      <View style={styles.contentView}>
        <FlatList
          styles={styles.list}
          data={data}
          renderItem={renderItem}
          contentContainerStyle={styles.contentFlatList}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </Container>
  );
}
