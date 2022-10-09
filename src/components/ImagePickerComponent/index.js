import React from 'react';
import {View, Text, FlatList} from 'react-native';
import Popup from 'components/Popup';

export default function ImagePickerComponent({
  visible,
  onClose,
  onSelectItem,
  onConfirm,
  style,
}) {
  return (
    <Popup visible={visible}>
      <FlatList />
    </Popup>
  );
}
