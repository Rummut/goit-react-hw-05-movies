import { FetchApi } from 'components/api-request';
import { useEffect } from 'react';

export const Home = () => {
  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const { results } = await FetchApi();
        console.log(results);
      } catch (error) {
        console.error('error');
      }
    };
    fetchFilms();
  }, []);
  return (
    <main>
      <h1>Tranding film</h1>
    </main>
  );
};
