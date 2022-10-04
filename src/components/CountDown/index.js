import React, {useEffect, useState, useRef} from 'react';
import OpacityButton from 'components/OpacityButton';
import {Text, View} from 'react-native';
import styles from './styles';
export default function CountDown({
  style,
  initValue = 180,
  onStart,
  onFinish,
  onResend,
}) {
  const [count, setCount] = useState(initValue);
  let timerID = useRef();
  useEffect(() => {
    onStart && onStart();
    timerID.current = setInterval(() => {
      setCount(prev => prev - 1);
    }, 1000);
    return () => clearInterval(timerID.current); // nhớ là return trong useEffect luôn trả về 1 hàm
  }, [onStart]);

  useEffect(() => {
    if (count <= 0) {
      clearInterval(timerID.current);
      onFinish && onFinish();
    }
  }, [count, onFinish]);

  return (
    <View style={[styles.container, style]}>
      <Text>{count}</Text>
      {count <= 0 && (
        <OpacityButton
          style={styles.reSendButton}
          onPress={() => {
            setCount(initValue);
            clearInterval(timerID.current);
            onResend && onResend();
            timerID.current = setInterval(() => {
              setCount(prev => prev - 1);
            }, 1000);
          }}>
          <Text style={styles.resendText}>Resend</Text>
        </OpacityButton>
      )}
    </View>
  );
}
