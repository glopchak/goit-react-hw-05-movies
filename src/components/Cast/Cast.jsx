import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from 'services/fetchMovies';
import { CastList } from './CastList';
import { Box } from 'components/Box';

 const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  useEffect(() => {
    fetchCast(movieId).then(resp => setCast(resp.cast));
  }, [movieId]);
  return (
    <>
    <Box as="div" pt="4">
       <CastList  cast={cast}/>
    </Box>
    </>
  );
};

export default Cast;