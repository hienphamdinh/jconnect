import React, {memo} from 'react';
import {TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
const BackButton = ({customStyle, iconColor = '#333333', handleBackButton}) => {
  const navigation = useNavigation();
  const onBack = handleBackButton
    ? handleBackButton
    : () => {
        navigation.goBack();
      };

  return (
    <TouchableOpacity
      style={[styles.jobDetailCircleContainer, customStyle]}
      onPress={onBack}>
      <AntDesign name="arrowleft" size={22} color={iconColor} />
    </TouchableOpacity>
  );
};

export default memo(BackButton);
