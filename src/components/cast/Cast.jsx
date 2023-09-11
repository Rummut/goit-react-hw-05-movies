import { useEffect, useState } from 'react';
import { GetActors } from 'components/api-request';
import { useParams } from 'react-router-dom';
import { ItemCast } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState(null);
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

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
            {
              <>
                <img
                  src={
                    actor.profile_path
                      ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                      : defaultImg
                  }
                  alt={actor.name}
                  width={200}
                />
                <ItemCast>
                  <li>Name: {actor.name}</li>
                  <li>Character: {actor.character}</li>
                </ItemCast>
              </>
            }
          </div>
        ))}
    </>
  );
};

export default Cast;
