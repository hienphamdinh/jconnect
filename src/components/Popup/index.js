import React from 'react';
import {View, Text, Modal, TouchableOpacity} from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import styles from './styles';

export const AnimationType = {
  SLIDE: 'slide',
  FADE: 'fade',
  NONE: 'none',
};
export default function Popup({
  visible = false,
  style,
  animationType = 'slide',
  title = 'Chọn thành phố',
  showHeader = false,
  onClose,
  children,
}) {
  return (
    <Modal
      visible={visible}
      animationType={animationType}
      style={styles.modal}
      transparent={true}>
      <View style={[styles.container, style]}>
        {showHeader && (
          <View style={styles.header}>
            <View style={styles.closeIcon} />
            <Text style={styles.headerText}>{title}</Text>
            <TouchableOpacity style={styles.closeIcon} onPress={onClose}>
              <AntDesignIcon name="close" size={20} color="black" />
            </TouchableOpacity>
          </View>
        )}
        {children}
      </View>
    </Modal>
  );
}
