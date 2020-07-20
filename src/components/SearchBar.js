import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ query, defineQuery, onQuerySubmit }) => {
  return (
    <View style={styles.searchBar}>
      <Feather name='search' style={styles.searchIconStyle} />
      <TextInput
        placeholder='Search'
        style={styles.inputStyle}
        value={query}
        onChangeText={defineQuery}
        autoCapitalize='none'
        autoCorrect={false}
        onEndEditing={onQuerySubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: '#f0eeee',
    minHeight: 50,
    borderRadius: 10,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginTop: 10,
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  searchIconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15,
  },
});

export default SearchBar;
