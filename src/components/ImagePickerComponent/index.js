import React, {useCallback} from 'react';
import {Image, FlatList, View, TouchableOpacity, Text} from 'react-native';
import Popup from 'components/Popup';
import useImagePicker from './hook';
import Loading from 'components/Loading';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import get from 'lodash/get';
import I18n from 'locales';
import styles from './styles';

export default function ImagePickerComponent({
  visible,
  onClose,
  onSelectItem,
  selected,
  onConfirm,
  style,
}) {
  const {listImages, loading, onReached} = useImagePicker();

  const renderItem = useCallback(
    ({item, index}) => {
      const active =
        get(item, 'node.image.uri') === get(selected, 'node.image.uri');
      return (
        <TouchableOpacity
          onPress={() => {
            onSelectItem && onSelectItem(item);
          }}>
          <Image
            source={{
              uri: get(item, 'node.image.uri'),
            }}
            resizeMod="contain"
            style={styles.img}
          />
          {active && <View style={styles.mask} />}
          {active && (
            <View style={styles.checkContainer}>
              <EntypoIcons name="check" color={'white'} size={35} />
            </View>
          )}
        </TouchableOpacity>
      );
    },
    [onSelectItem, selected],
  );

  return (
    <Popup
      visible={visible}
      showHeader
      onClose={onClose}
      style={styles.modal}
      title={I18n.t('PopupSelectImage.Title')}>
      {loading && <Loading />}
      {!loading && (
        <FlatList
          style={styles.list}
          data={listImages}
          renderItem={renderItem}
          numColumns={3}
          onEndReached={onReached}
        />
      )}
    </Popup>
  );
}
