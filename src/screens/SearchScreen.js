import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
  const [query, setQuery] = useState('');
  const [searchResults, setResults] = useState([]);
  const [errorMsg, setError] = useState('');

  const searchQuery = async () => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: query,
          location: 'lexington',
        },
      });
      setError('');
      setResults(response.data.businesses);
      console.log(searchResults);
    } catch (error) {
      console.log(error);
      setError('Something went wrong, please try again later.');
    }
  };

  return (
    <View style={styles.searchScreen}>
      <SearchBar
        query={query}
        defineQuery={setQuery}
        onQuerySubmit={searchQuery}
      />
      <Text>We have found {searchResults.length} results.</Text>
      {errorMsg !== '' ? <Text>{errorMsg}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  searchScreen: {
    marginTop: 30,
  },
});

export default SearchScreen;
