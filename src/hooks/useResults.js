import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [searchResults, setResults] = useState([]);
  const [errorMsg, setError] = useState('');

  const searchQuery = async (query) => {
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

  useEffect(() => {
    searchQuery('burger');
  }, []);

  return [searchQuery, searchResults, errorMsg];
};
