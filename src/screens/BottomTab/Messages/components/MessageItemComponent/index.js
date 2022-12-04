import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import OpacityButton from 'components/OpacityButton';
import {timeFromNow} from 'utils/JobHelper';
import Avatar from 'components/AvatarComponent';
import styles from './styles';
import get from 'lodash/get';
import Popup from 'components/Popup';

export default function MessageItemComponent({
  item,
  index,
  onPress,
  onLongPress,
  isShowDelete = false,
  onCloseModalDelete,
  onDeleteMessage,
  onClearMessage,
}) {
  return (
    <OpacityButton
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}
      delayLongPress={800}>
      <Avatar
        source={{uri: get(item, 'userOther.avatar')}}
        style={[
          styles.profilePicWrapper,
          get(item, 'userOther.avatar') ? {} : styles.borderAvatar,
        ]}
        imageStyle={styles.profilePic}
      />
      <View style={styles.infoWrapper}>
        <Text style={styles.txtName}>
          {get(item, 'userOther.fullName', '')}
        </Text>
        <Text style={styles.txtMessage}>{get(item, 'closestMessage')}</Text>
      </View>
      <Text style={styles.time}>{timeFromNow(get(item, 'updatedAt'))}</Text>
      <Popup
        visible={isShowDelete}
        style={styles.modal}
        showHeader
        title={''}
        onClose={onCloseModalDelete}>
        <TouchableOpacity
          style={[styles.delete, styles.clearConversation]}
          onPress={() => onClearMessage(item)}>
          <Text style={styles.conversationText}>Clear this conversation</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.delete}
          onPress={() => onDeleteMessage(item)}>
          <Text style={styles.deleteText}>Delete this conversation</Text>
        </TouchableOpacity>
      </Popup>
    </OpacityButton>
  );
}
