import React, {useState} from 'react';
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
import Job from 'components/JobList';
import {jobs, categories} from 'constants/JobData';
import Container from 'components/Container';
import HeaderJobSearch from './components/HeaderJobSearch';

const Home = ({navigation}) => {
  return (
    <Container>
      <HeaderJobSearch />
    </Container>
  );
};

export default Home;
