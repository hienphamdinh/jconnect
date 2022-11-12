import React from 'react';
import {View, FlatList} from 'react-native';
import Container from 'components/Container';
import NormalHeaderBar from 'components/NormalHeaderBar';
import MessageItemComponent from './components/MessageItemComponent';
import useMessage from './hook';
import styles from './styles';

export default function Messages() {
  const {listMessage, onSearch, onPressItem} = useMessage();
  const renderItem = ({item, index}) => (
    <MessageItemComponent
      item={item}
      index={index}
      onPress={() => onPressItem(item)}
    />
  );
  return (
    <Container notSafeArea>
      <NormalHeaderBar showSearch={false} />
      <View style={styles.contentView}>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          styles={styles.list}
          data={listMessage}
          renderItem={renderItem}
          contentContainerStyle={styles.contentFlatList}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </Container>
  );
}
