import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import OpacityButton from 'components/OpacityButton';
import {WIDTH_RATIO} from 'themes/Dimens';
export default function NormalHeaderBar({
  containerStyle,
  searchStyle,
  title,
  placeholder,
  onSearch,
  showSearch = true,
}) {
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.avatarHeader}>
        <Text style={styles.titleHeader}>{title || 'Conversations'}</Text>
      </View>
      {showSearch ? (
        <OpacityButton style={[styles.search, searchStyle]}>
          <TextInput
            style={styles.title}
            placeholder={placeholder || 'Search conversation'}
            onChangeText={onSearch}
          />
          <AntDesign name={'search1'} size={25 * WIDTH_RATIO} />
        </OpacityButton>
      ) : null}
    </View>
  );
}
