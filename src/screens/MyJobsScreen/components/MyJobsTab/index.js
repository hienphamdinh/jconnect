import React, {useState} from 'react';
import {
  TouchableOpacity,
  Text,
  FlatList,
  View,
  useWindowDimensions,
} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import MyApplyJob from './MyApplyJob';
import MyPostedJob from './MyPostedJob';
import MySaveJob from './MySaveJob';
import get from 'lodash/get';
import styles from './styles';

export default function MyJobsTab({initTabIndex = 0}) {
  const layout = useWindowDimensions();
  const [activeTab, setActiveTab] = useState(initTabIndex);
  const renderScene = SceneMap({
    MyApplyJob,
    MyPostedJob,
    MySaveJob,
  });

  const renderTabBar = props => {
    const renderItem = ({item, index}) => {
      return (
        <TouchableOpacity
          style={styles.itemTabBar}
          activeOpacity={0.8}
          onPress={() => {
            setActiveTab(index);
          }}>
          <Text style={styles.tabBarText}>
            {get(item, 'title') || 'Không có'}
          </Text>
          {activeTab === index ? <View style={styles.indicator} /> : null}
        </TouchableOpacity>
      );
    };
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          horizontal
          data={get(props, 'navigationState.routes')}
          renderItem={renderItem}
          contentContainerStyle={styles.contentContainerStyle}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  };

  const routes = [
    {key: 'MyApplyJob', title: 'Applied'},
    {key: 'MyPostedJob', title: 'Posted'},
    {key: 'MySaveJob', title: 'Saved'},
  ];

  return (
    <TabView
      navigationState={{index: activeTab, routes}}
      renderTabBar={renderTabBar}
      renderScene={renderScene}
      onIndexChange={setActiveTab}
      initialLayout={{width: layout.width}}
    />
  );
}
