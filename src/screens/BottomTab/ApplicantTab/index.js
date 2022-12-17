import React, {useCallback} from 'react';
import {
  View,
  FlatList,
  Text,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import Container from 'components/Container';
import NormalHeaderBar from 'components/NormalHeaderBar';
import useMessage from './hook';
import styles from './styles';
import Avatar from 'components/AvatarComponent';
import Fetching from 'components/Fetching';
import {USER_TYPE} from 'constants/Profile';
import get from 'lodash/get';
import PrimaryButton from 'components/PrimaryButton';

export default function Messages() {
  const {
    isCompany,
    loading,
    listUser,
    refreshing,
    onRefresh,
    onSearch,
    onPressItem,
  } = useMessage();

  const renderItem = useCallback(
    ({item, index}) => {
      return isCompany ? (
        <View style={styles.item}>
          <Avatar
            source={{uri: get(item, 'avatar')}}
            style={styles.avatar}
            imageStyle={styles.imageStyle}
          />
          <View style={styles.info}>
            <Text style={styles.nameText}>{get(item, 'fullName', '')}</Text>
            <Text numberOfLines={2}>
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
      ) : (
        <TouchableOpacity
          style={styles.itemCompany}
          onPress={() => onPressItem(item)}>
          <Avatar
            source={{uri: get(item, 'avatar')}}
            style={styles.avatarCompany}
            imageStyle={styles.imageStyleCompany}
          />
          <View style={styles.infoCompany}>
            <Text style={styles.nameTextCompany}>
              {get(item, 'fullName', '')}
            </Text>
            <Text>{`City: ${get(item, 'city')}`}</Text>
            <Text>{`Amount: ${get(item, 'company.amountEmployee')}`}</Text>
            <Text>{`Website: ${get(item, 'company.website')}`}</Text>
          </View>
        </TouchableOpacity>
      );
    },
    [onPressItem, isCompany],
  );

  return (
    <Container notSafeArea>
      <NormalHeaderBar
        title={'Find applicant'}
        placeholder={'Search by name and position'}
        onSearch={onSearch}
      />
      {loading ? (
        <Fetching />
      ) : isCompany ? (
        <View style={styles.contentView}>
          <FlatList
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            keyExtractor={(item, index) => index.toString()}
            styles={styles.list}
            numColumns={2}
            data={listUser}
            renderItem={renderItem}
            contentContainerStyle={styles.contentFlatList}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
          />
        </View>
      ) : (
        <View style={styles.contentView}>
          <FlatList
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            keyExtractor={(item, index) => index.toString()}
            styles={styles.list}
            data={listUser}
            renderItem={renderItem}
            contentContainerStyle={styles.contentFlatList}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
          />
        </View>
      )}
    </Container>
  );
}
