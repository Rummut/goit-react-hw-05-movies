import axios from 'axios';

export const FetchApi = async () => {
  try {
    const response = await axios.request(
      'https://api.themoviedb.org/3/trending/movie/week?api_key=18883342dbc5441355dc2460024ef776'
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const GetMovieDetails = async movieId => {
  try {
    const response = await axios.request(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=18883342dbc5441355dc2460024ef776`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const GetActors = async movieId => {
  try {
    const response = await axios.request(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=18883342dbc5441355dc2460024ef776`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
