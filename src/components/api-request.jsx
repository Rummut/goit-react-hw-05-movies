import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/trending/movie/week?api_key=18883342dbc5441355dc2460024ef776',
  params: { language: 'en-US' },
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxODg4MzM0MmRiYzU0NDEzNTVkYzI0NjAwMjRlZjc3NiIsInN1YiI6IjY0ZjM2OTM0NzdkMjNiMDBjYjg3MmU1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GFkJIyILCIGCg1qkUgloJUjkbXWsJFQTPn34k4_b-zs',
  },
};
export const FetchApi = async () => {
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
