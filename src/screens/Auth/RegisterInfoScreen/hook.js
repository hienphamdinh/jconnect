import {useState, useCallback} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {MALE, FEMALE} from 'constants/Gender';

const useRegisterHook = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const [activeToggle, setActiveToggle] = useState(false);
  const [gender, setGender] = useState();
  const onPressToggle = useCallback(() => {
    setActiveToggle(!activeToggle);
  }, [activeToggle]);

  const onPressJoin = useCallback(() => {
    navigation.navigate('BottomTabNavigator');
  }, [navigation]);

  const onPressGenderMale = () => {
    setGender(MALE);
  };

  const onPressGenderFeMale = () => {
    setGender(FEMALE);
  };

  return {
    insets,
    activeToggle,
    gender,
    onPressToggle,
    onPressJoin,
    onPressGenderMale,
    onPressGenderFeMale,
  };
};

export default useRegisterHook;
