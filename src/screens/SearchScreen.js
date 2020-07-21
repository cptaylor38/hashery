import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  const [query, setQuery] = useState('');
  const [searchQuery, searchResults, errorMsg] = useResults();

  const filterResultsByPrice = (price) => {
    return searchResults.filter((result) => result.price === price);
  };

  return (
    <View style={styles.searchScreen}>
      <SearchBar
        query={query}
        defineQuery={setQuery}
        onQuerySubmit={() => searchQuery(query)}
      />
      <ScrollView style={{ marginLeft: 15 }}>
        <ResultsList
          results={filterResultsByPrice('$')}
          title='Cost Effective'
        />
        <ResultsList results={filterResultsByPrice('$$')} title='Bit Pricier' />
        <ResultsList
          results={filterResultsByPrice('$$$')}
          title='Big Spender'
        />
      </ScrollView>
      {errorMsg !== '' ? <Text>{errorMsg}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  searchScreen: {
    backgroundColor: 'white',
    flex: 1,
  },
});

export default SearchScreen;
