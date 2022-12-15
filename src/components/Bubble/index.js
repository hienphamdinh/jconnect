import React, {useRef, memo, useCallback} from 'react';
import {Animated, StyleSheet, PanResponder} from 'react-native';
import {screenWidth, screenHeight} from 'themes/Dimens';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import isUndefined from 'lodash/isUndefined';

const Bubble = ({
  children,
  initialPositionHeight = 0.6,
  buttonHeight = 76,
  buttonWidth = 76,
}) => {
  const inset = useSafeAreaInsets();
  const boundTop = inset.top + buttonHeight + 60;
  const boundBottom = screenHeight - inset.bottom - buttonHeight - 140; // 80 is relative height of bottom tab
  const boundRight = screenWidth - buttonWidth - 16;
  const boundLeft = 10;

  const pan = useRef(
    new Animated.ValueXY({
      x: boundRight,
      y: (screenHeight - buttonHeight) * initialPositionHeight,
    }),
  ).current;

  const changePosition = useCallback(
    ({currentX, currentY}) => {
      if (isUndefined(currentX) || isUndefined(currentY)) {
        return;
      }
      const offsetX = currentX >= screenWidth / 2 ? boundRight : boundLeft;
      const offsetY =
        currentY <= boundTop
          ? boundTop
          : currentY >= boundBottom
          ? boundBottom
          : pan.y._value;

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
        return !(gestureState.dx === 0 && gestureState.dy === 0);
      },

      onMoveShouldSetPanResponderCapture: (evt, gestureState) => {
        //return true if user is swiping, return false if it's a single click
        return !(gestureState.dx === 0 && gestureState.dy === 0);
      },

      onPanResponderGrant: () => {
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value,
        });
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
      pointerEvents={'box-none'}
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
  container: {zIndex: 10, position: 'absolute'},
});

export default memo(Bubble);
