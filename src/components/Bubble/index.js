import React, {useRef, memo, useCallback} from 'react';
import {Animated, StyleSheet, PanResponder} from 'react-native';
import {deviceWidth, deviceHeight} from 'themes/Dimens';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import isUndefined from 'lodash/isUndefined';

const Bubble = ({
  children,
  initialPositionHeight = 0.75,
  buttonHeight = 76,
  buttonWidth = 76,
}) => {
  const inset = useSafeAreaInsets();
  const boundTop = inset.top + 30;
  const boundBottom = deviceHeight - inset.bottom - buttonHeight - 80; // 80 is relative height of bottom tab
  const boundRight = deviceWidth - buttonWidth - 10;
  const boundLeft = 10;

  const pan = useRef(
    new Animated.ValueXY({
      x: boundRight,
      y: (deviceHeight - buttonHeight) * initialPositionHeight,
    }),
  ).current;

  const changePosition = useCallback(
    ({currentX, currentY}) => {
      if (isUndefined(currentX) || isUndefined(currentY)) {
        return;
      }
      const offsetX = currentX > deviceWidth / 2 ? boundRight : boundLeft;
      const offsetY =
        currentY < boundTop
          ? boundTop
          : currentY > boundBottom
          ? boundBottom
          : currentY;

      Animated.spring(pan, {
        toValue: {
          x: offsetX,
          y: offsetY,
        },
        useNativeDriver: false,
        friction: 5,
      }).start();
    },
    [boundBottom, boundRight, boundTop, pan],
  );

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (evt, gestureState) => {
        //return true if user is swiping, return false if it's a single click
        return true;
      },

      onMoveShouldSetPanResponderCapture: (evt, gestureState) => {
        //return true if user is swiping, return false if it's a single click
        return true;
      },

      onPanResponderGrant: () => {
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value,
        });
        pan.setValue({x: 0, y: 0});
      },

      onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}], {
        useNativeDriver: false,
      }),

      onPanResponderRelease: (evt, gestureState) => {
        pan.flattenOffset();
        changePosition({
          currentX: gestureState.moveX,
          currentY: gestureState.moveY,
        });
      },
    }),
  ).current;

  return (
    <Animated.View
      style={[
        styles.container,
        {transform: [{translateX: pan.x}, {translateY: pan.y}]},
      ]}
      {...panResponder.panHandlers}>
      {children}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    zIndex: 10,
    elevation: 10,
    position: 'absolute',
    backgroundColor: 'transparent',
  },
});

export default memo(Bubble);
