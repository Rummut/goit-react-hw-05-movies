import { useEffect, useState } from 'react';
import { GetActors } from 'components/api-request';
import { useParams } from 'react-router-dom';
import { ItemCast } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState(null);

  useEffect(() => {
    const getFilms = async () => {
      try {
        const { cast } = await GetActors(movieId);
        setActors(cast);
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
          <div key={actor.id}>
            {actor.profile_path && (
              <>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                  alt=""
                  width={200}
                />
                <ItemCast>
                  <li>Name: {actor.name}</li>
                  <li>Character: {actor.character}</li>
                </ItemCast>
              </>
            )}
          </div>
        ))}
    </>
  );
};

export default Cast;
