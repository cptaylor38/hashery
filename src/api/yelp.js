import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer 3eAdoGnQQ_K_WmySTC4i6cfqT9OWy1Sjv__DrvaW9Gcmw_87yrHpJlnEKo5YFLa-dMihTMxEWR7JRrbF5-Bq7sVVA95OjzNjjarKUguP5XngxJQQX7uQSO5d7vgUX3Yx',
  },
});
