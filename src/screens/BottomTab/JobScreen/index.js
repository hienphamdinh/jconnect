import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import Category from 'components/Categories';
import Job from 'components/Job';
import {jobs, categories} from 'constants/JobData';
import Container from 'components/Container';

const Home = ({navigation}) => {
  const [data, setData] = useState({
    username: 'Shola',
    photo:
      'https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  });

  const renderCategory = ({item}) => {
    return <Category category={item} />;
  };

  const renderJob = ({item}) => {
    return <Job job={item} navigation={navigation} />;
  };

  return (
    <KeyboardAvoidingView style={styles.homeContainer}>
      <Container style={styles.homeContent}>
        <View style={styles.homeHeader}>
          <View>
            <Text style={styles.usernameText}>What's up {data?.username}</Text>
            <Text style={styles.findJobText}>Find your perfect job</Text>
          </View>
          <View style={styles.profilePicWrapper}>
            <Image source={{uri: data?.photo}} style={styles.profilePic} />
          </View>
        </View>
        <View style={styles.searchContainer}>
          <TextInput placeholder="Search" style={styles.searchInput} />
          <TouchableOpacity
            style={styles.searchButton}
            onPress={() => {
              navigation.navigate('PostJobScreen');
            }}>
            <Ionicons name="shuffle" size={25} color="#fff" />
          </TouchableOpacity>
        </View>
        {/* <FlatList
          style={styles.scrollViewContent}
          showsVerticalScrollIndicator={false}> */}
        <View style={styles.container}>
          <View style={styles.section}>
            <Text style={styles.heading}>Interesting categories</Text>
            <FlatList
              data={categories}
              keyExtractor={(item, index) => index.toString()}
              renderItem={renderCategory}
              horizontal={true}
              contentContainerStyle={styles.sectionScrollContainer}
              showsHorizontalScrollIndicator={false}
            />
          </View>

          <View style={styles.section}>
            <Text style={styles.heading}>Jobs for you</Text>
            <FlatList
              data={jobs}
              keyExtractor={(item, index) => index.toString()}
              renderItem={renderJob}
              horizontal={false}
              contentContainerStyle={styles.sectionScrollContainer}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
        {/* </FlatList> */}
      </Container>
    </KeyboardAvoidingView>
  );
};

export default Home;
