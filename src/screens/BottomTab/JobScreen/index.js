import React from 'react';
import {Text, View} from 'react-native';
import Container from 'components/Container';
import HeaderJobSearch from './components/HeaderJobSearch';
import ListSearchRecently from './components/ListSearchRecently';
import JobList from 'components/JobList';
import useJobScreenHook from './hook';
import styles from './styles';
const Home = () => {
  const {listJob, hotJobs, searchText, onEndReached, onPressItem, onSearch} =
    useJobScreenHook();
  return (
    <Container>
      <HeaderJobSearch onSearch={onSearch} searchText={searchText} />
      <View style={styles.marginTop} />
      {!searchText ? <ListSearchRecently onPressItem={onPressItem} /> : null}
      {!searchText ? (
        <Text style={styles.recommendForYou}>Recommend for you</Text>
      ) : null}

      {!searchText ? <JobList data={hotJobs} /> : null}
      {searchText ? (
        <JobList
          data={listJob}
          style={styles.listJob}
          onReachEnd={onEndReached}
        />
      ) : null}
    </Container>
  );
};

export default Home;
