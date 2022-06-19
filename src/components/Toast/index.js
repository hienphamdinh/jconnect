import React, {useRef} from 'react';
import {View, Text, StyleSheet, Animated, Dimensions} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import OpacityButton from 'components/OpacityButton';
import {HEIGHT_DEVICE} from 'themes/Dimens';
export default function Toast() {
  const toastRef = useRef(new Animated.Value(HEIGHT_DEVICE * -1)).current;
  const insets = useSafeAreaInsets();
  const popIn = () => {
    console.log('Innnnnnn', HEIGHT_DEVICE);
    Animated.timing(toastRef, {
      toValue: -HEIGHT_DEVICE + insets.top + 60,
      duration: 300,
      useNativeDriver: true,
    }).start(popOut());
  };

  const popOut = () => {
    console.log('Outtt', HEIGHT_DEVICE * -1);
    setTimeout(() => {
      Animated.timing(toastRef, {
        toValue: HEIGHT_DEVICE * -1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }, 3000);
  };

  const onPressClose = () => {
    console.log('Outtttt');
    Animated.timing(toastRef, {
      toValue: HEIGHT_DEVICE * -1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };
  return (
    <Animated.View
      style={[
        styles.toastContainer,
        {
          transform: [{translateY: toastRef}],
        },
      ]}>
      <Text>Tao là Phạm Đình Hiển</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  toastContainer: {
    position: 'relative',
    shadowColor: 'gray',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 2.5,
    borderRadius: 8,
    marginHorizontal: 16,
    height: 60,
    width: 350,
    backgroundColor: 'white',
    paddingHorizontal: 8,
    justifyContent: 'center',
    elevation: 5,
  },
});
