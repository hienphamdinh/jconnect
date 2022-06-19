import React, {memo} from 'react';
import {View} from 'react-native';
import OpacityButton from 'components/OpacityButton';
import styles from './styles';
import Colors from 'themes/Colors';
const SwitchComponent = props => {
  const {active, customContainer, toggleStyle, onPressToggle} = props;
  return (
    <OpacityButton
      style={[
        styles.container,
        {backgroundColor: active ? Colors.primary : Colors.gray},
        customContainer,
      ]}
      onPress={onPressToggle}>
      <View
        style={[
          styles.toggle,
          {
            alignSelf: active ? 'flex-end' : 'flex-start',
            backgroundColor: active ? Colors.white : Colors.paleGrey,
          },
          toggleStyle,
        ]}
      />
    </OpacityButton>
  );
};
export default memo(SwitchComponent);
