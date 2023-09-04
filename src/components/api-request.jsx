import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/trending/movie/week',
  params: { language: 'en-US' },
  headers: {
    accept: 'application/json',
    Authorization: '18883342dbc5441355dc2460024ef776',
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
