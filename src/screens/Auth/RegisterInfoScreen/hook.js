import React, {useState, useCallback} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

const useRegisterHook = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const [activeToggle, setActiveToggle] = useState(false);
  const onPressToggle = useCallback(() => {
    setActiveToggle(!activeToggle);
  }, [activeToggle]);

  const onPressJoin = useCallback(() => {
    navigation.navigate('BottomTabNavigator');
  }, [navigation]);
  return {
    insets,
    activeToggle,
    onPressToggle,
    onPressJoin,
  };
};

export default useRegisterHook;
