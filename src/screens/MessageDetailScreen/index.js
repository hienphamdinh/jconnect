import React, {useCallback} from 'react';
import {View, FlatList, Text, TouchableOpacity, TextInput} from 'react-native';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import IconsIcons from 'react-native-vector-icons/Ionicons';
import Avatar from 'components/AvatarComponent';
import Colors from 'themes/Colors';
import useMessageDetail from './hook';
import {timeFromNow} from 'utils/JobHelper/index.js';
import get from 'lodash/get';
import styles from './styles';

export default function MessageDetailScreen(props) {
  const {
    userOther,
    userId,
    listMessage,
    message,
    onChangeText,
    goBack,
    onSend,
  } = useMessageDetail(props);

  const conversationStatus =
    get(userOther, 'justNow', '') === 'on'
      ? 'Active now'
      : timeFromNow(get(userOther, 'timeOff')) || '';

  const renderItem = useCallback(
    ({item, index}) => {
      const active = userId === item.sender;
      return (
        <View style={[styles.itemMessage, active && styles.flexLeft]}>
          <Text
            style={[styles.messageText, active && styles.messageTextActive]}>
            {get(item, 'content', '')}
          </Text>
        </View>
      );
    },
    [userId],
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={goBack}>
          <AntDesignIcons name="arrowleft" size={25} />
        </TouchableOpacity>
        <Avatar
          source={{uri: get(userOther, 'avatar')}}
          style={styles.avatarContainer}
          imageStyle={styles.avatar}
        />
        <View style={styles.info}>
          <Text style={styles.messageName}>{get(userOther, 'fullName')}</Text>
          <Text style={styles.activeStatus}>{conversationStatus}</Text>
        </View>
      </View>
      <FlatList
        inverted
        data={listMessage}
        style={styles.list}
        renderItem={renderItem}
        contentContainerStyle={styles.contentContainerStyle}
      />
      <View style={styles.footer}>
        <TextInput
          style={styles.input}
          value={message}
          onChangeText={onChangeText}
        />
        <TouchableOpacity onPress={onSend}>
          <IconsIcons name="md-send-sharp" size={27} color={Colors.primary} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
