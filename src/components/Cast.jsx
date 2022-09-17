import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from 'services/fetchMovies';
import { CastList } from './CastList';


 const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  useEffect(() => {
    fetchCast(movieId).then(resp => setCast(resp.cast));
  }, [movieId]);
  return (
    <>
      <CastList  cast={cast}/>
    </>
  );
};

export default Cast;