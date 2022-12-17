import React from 'react';
import {View, FlatList, RefreshControl, Text} from 'react-native';
import Container from 'components/Container';
import NormalHeaderBar from 'components/NormalHeaderBar';
import MessageItemComponent from './components/MessageItemComponent';
import Fetching from 'components/Fetching';
import Images from 'themes/Images.js';
import FastImage from 'react-native-fast-image';
import useMessage from './hook';
import styles from './styles';

export default function Messages() {
  const {
    loading,
    listMessage,
    isShowDelete,
    refreshing,
    onClearMessage,
    onRefresh,
    onLongPressItem,
    onCloseModalDelete,
    onPressItem,
    onDeleteMessage,
  } = useMessage();
  const renderItem = ({item, index}) => (
    <MessageItemComponent
      item={item}
      index={index}
      onPress={() => onPressItem(item)}
      onLongPress={onLongPressItem}
      onCloseModalDelete={onCloseModalDelete}
      isShowDelete={isShowDelete}
      onDeleteMessage={onDeleteMessage}
      onClearMessage={onClearMessage}
    />
  );
  return (
    <Container notSafeArea>
      <NormalHeaderBar showSearch={false} />
      {loading ? (
        <Fetching />
      ) : (
        <View style={styles.contentView}>
          <FlatList
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            ListEmptyComponent={() => (
              <View style={styles.nothingComponent}>
                <FastImage source={Images.Nothing} style={styles.nothingImg} />
                <Text style={styles.nothingText}>You no have any message</Text>
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
            styles={styles.list}
            data={listMessage}
            renderItem={renderItem}
            contentContainerStyle={styles.contentFlatList}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
          />
        </View>
      )}
    </Container>
  );
}
