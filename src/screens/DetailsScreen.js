import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import yelp from '../api/yelp';

const DetailsScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  const [detailData, setDetailData] = useState(null);

  const getDetails = async (id) => {
    try {
      const response = await yelp.get(`/${id}`);
      setDetailData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDetails(id);
  }, []);

  if (!detailData) return null;

  return (
    <View>
      <Text>{detailData.name}</Text>
      <FlatList
        data={detailData.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image source={{ uri: item }} style={styles.detailImage} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  detailImage: {
    height: 150,
    width: 250,
  },
});

export default DetailsScreen;
