import React from 'react';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import OpacityButton from 'components/OpacityButton';
import {WIDTH_RATIO} from 'themes/Dimens';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import Colors from 'themes/Colors';
export default function HeaderJobSearch({
  searchText,
  containerStyle,
  searchStyle,
  placeholder = 'Search...',
  onPress,
  onSearch,
}) {
  const navigation = useNavigation();
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.topHeader}>
        <TouchableOpacity
          style={styles.topHeaderItem}
          onPress={() => {
            navigation.navigate('MyJobsScreen');
          }}>
          <Ionicons name="browsers" size={25} color={Colors.primary} />
          <Text style={styles.textHeaderItem}>My jobs</Text>
        </TouchableOpacity>
        <View style={styles.divider} />
        <TouchableOpacity
          style={styles.topHeaderItem}
          onPress={() => {
            navigation.navigate('PostJobScreen');
          }}>
          <Ionicons name="create-sharp" size={25} color={Colors.primary} />
          <Text style={styles.textHeaderItem}>Post job</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.avatarWrapper}>
        <OpacityButton style={[styles.search, searchStyle]} onPress={onPress}>
          <TextInput
            value={searchText}
            style={styles.title}
            placeholder={placeholder}
            placeholderTextColor="black"
            onChangeText={text => {
              onSearch(text);
            }}
          />
          <AntDesign name={'search1'} size={25 * WIDTH_RATIO} />
        </OpacityButton>
      </View>
    </View>
  );
}
