import React from 'react';
import {TouchableOpacity} from 'react-native';

export default function OpacityButton(props) {
  const {children} = props;
  return (
    <TouchableOpacity {...props} delayPressIn={500}>
      {children}
    </TouchableOpacity>
  );
}
