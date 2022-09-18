import { useState, Suspense, useEffect } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieById } from 'services/fetchMovies';
import { MovieDetails } from 'components/MovieDetailsPage/MovieDetails';
import { BackLink } from 'components/BackLink.styled';
import { DetailsLink } from 'components/DetailsLink.styled';
import { Box } from 'components/Box';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backToSerchBar = location.state.from;

  useEffect(() => {
    fetchMovieById(movieId).then(resp => setMovie(resp.data));
  }, [movieId]);

  return (
    <>
      <Box as="div" p="4">
        <BackLink to={backToSerchBar}>
          Back to {backToSerchBar.pathname === '/' ? 'Home' : 'Movies'}
        </BackLink>
      </Box>
      {movie && (
        <>
          <MovieDetails movie={movie} backToSerchBar={backToSerchBar} />
          <Box as="div" p="4">
            <DetailsLink to="cast" state={{ from: location.state.from }}>
              Cast
            </DetailsLink>
            <DetailsLink to="reviews" state={{ from: location.state.from }}>
              Previews
            </DetailsLink>
            <Suspense fallback={<p>Loading...</p>}>
              <Outlet />
            </Suspense>
          </Box>
        </>
      )}
    </>
  );
};

export default MovieDetailsPage;
