import { useEffect, useState } from 'react';
import { GetActors } from 'components/api-request';
import { useParams } from 'react-router-dom';

export const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState(null);

  console.log(movieId);
  useEffect(() => {
    const getFilms = async () => {
      try {
        const { cast } = await GetActors(movieId);
        setActors(cast);
        console.log(cast);
      } catch (error) {
        console.error('error');
      }
    };
    getFilms();
  }, [movieId]);

  return (
    <>
      {actors &&
        actors.map(actor => (
          <>
            <img
              src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
              alt=""
              width={200}
            />
            <ul key={actor.id}>
              <li>{actor.name}</li>
              <li>Character:{actor.character}</li>
            </ul>
          </>
        ))}
    </>
  );
};
