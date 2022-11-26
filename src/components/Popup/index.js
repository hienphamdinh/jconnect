import React from 'react';
import {View, Text, Modal, TouchableOpacity} from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import Colors from 'themes/Colors';
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
  title = 'Select city',
  showHeader = false,
  onClose,
  renderLeft,
  onLeftPress = () => {},
  children,
  headerStyle,
  lightMode,
}) {
  return (
    <Modal
      visible={visible}
      animationType={animationType}
      style={styles.modal}
      transparent={true}>
      <View style={[styles.container, style]}>
        {showHeader && (
          <View
            style={[
              styles.header,
              headerStyle,
              {backgroundColor: lightMode ? Colors.primary : Colors.silver},
            ]}>
            <TouchableOpacity
              onPress={onLeftPress}
              style={[styles.closeIcon, {alignItems: 'flex-start'}]}>
              {renderLeft && renderLeft()}
            </TouchableOpacity>
            <Text
              style={[
                styles.headerText,
                {
                  color: lightMode ? Colors.white : Colors.black,
                },
              ]}>
              {title}
            </Text>
            <TouchableOpacity style={styles.closeIcon} onPress={onClose}>
              <AntDesignIcon
                name="close"
                size={20}
                color={lightMode ? 'white' : 'black'}
              />
            </TouchableOpacity>
          </View>
        )}
        {children}
      </View>
    </Modal>
  );
}
