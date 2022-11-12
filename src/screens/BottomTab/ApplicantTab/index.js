import React, {useCallback} from 'react';
import {View, FlatList, Text} from 'react-native';
import Container from 'components/Container';
import NormalHeaderBar from 'components/NormalHeaderBar';
import useMessage from './hook';
import styles from './styles';
import Avatar from 'components/AvatarComponent';
import {USER_TYPE} from 'constants/Profile';
import get from 'lodash/get';
import PrimaryButton from 'components/PrimaryButton';

export default function Messages() {
  const {listUser, onSearch, onPressItem} = useMessage();

  const renderItem = useCallback(
    ({item, index}) => {
      return (
        <View style={styles.item}>
          <Avatar
            source={{uri: get(item, 'avatar')}}
            style={styles.avatar}
            imageStyle={styles.imageStyle}
          />
          <View style={styles.info}>
            <Text style={styles.nameText}>{get(item, 'fullName', '')}</Text>
            <Text>
              {get(item, 'account.type') === USER_TYPE.STUDENT
                ? 'Student'
                : get(item, 'mostRecentlyJob')}
            </Text>
            <PrimaryButton
              title={'Profile'}
              customStyle={styles.btnProfile}
              textStyle={styles.textStyle}
              onPress={() => onPressItem(item)}
            />
          </View>
        </View>
      );
    },
    [onPressItem],
  );
  return (
    <Container notSafeArea>
      <NormalHeaderBar
        title={'Find applicant'}
        placeholder={'Search by name and position'}
        onSearch={onSearch}
      />
      <View style={styles.contentView}>
        <FlatList
          styles={styles.list}
          numColumns={2}
          data={listUser}
          renderItem={renderItem}
          contentContainerStyle={styles.contentFlatList}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </Container>
  );
}
