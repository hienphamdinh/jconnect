import React from 'react';
import {View, Image, Text} from 'react-native';
import OpacityButton from 'components/OpacityButton';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import {WIDTH_RATIO} from 'themes/Dimens';
const listAction = [
  {type: 'like', icon: 'like1', action: () => {}},
  //   {type: 'like', icon: 'like2', action: () => {}},
  {type: 'like', icon: 'message1', action: () => {}},
];
export default function index() {
  const photo =
    'https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
  const img =
    'https://static.scientificamerican.com/sciam/cache/file/7A715AD8-449D-4B5A-ABA2C5D92D9B5A21_source.png';
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Image source={{uri: photo}} style={styles.avatar} />
        <View style={styles.textInfoWrapper}>
          <Text style={styles.infoName}>Phạm Đình Hiển</Text>
          <Text style={styles.position}>Mobile Engineer</Text>
          <Text style={styles.infoTime}>1w</Text>
        </View>
      </View>
      <View style={styles.textContentWrapper}>
        <Text style={styles.textContent}>
          Nhà tôi 3 đời chữa bệnh trĩ, không khỏi không lấy tiền
        </Text>
      </View>
      <Image source={{uri: img}} style={styles.imageContent} />
      <View style={styles.actionWrapper}>
        {listAction.map(item => (
          <OpacityButton style={styles.iconWrapper}>
            <AntDesign name={item.icon} size={18 * WIDTH_RATIO} />
            <Text style={styles.textNumberAction}>1000</Text>
          </OpacityButton>
        ))}
      </View>
    </View>
  );
}
