import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: result.image_url }} style={styles.imageStyle} />
      <Text style={styles.resultText}>{result.name}</Text>
      <Text>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  imageStyle: {
    height: 150,
    minWidth: 250,
    marginBottom: 5,
  },
  resultText: {
    fontWeight: 'bold',
  },
});

export default ResultsDetail;
