import { useState, Suspense, useEffect } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieById } from 'services/fetchMovies';
import { MovieDetails } from 'components/MovieDetails';
import { Link } from 'react-router-dom';

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
      <Link to={backToSerchBar}>
        Back to {backToSerchBar.pathname === '/' ? 'Home' : 'Movies'}
      </Link>
      {movie && (
        <>
          <MovieDetails movie={movie} backToSerchBar={backToSerchBar} />
          <Link to="cast" state={{ from: location.state.from }}>
            Cast
          </Link>
          <Link to="reviews" state={{ from: location.state.from }}>
            Previews
          </Link>
          <Suspense fallback={<p>Loading...</p>}>
            <Outlet />
          </Suspense>
          </>
      )}
    </>
  );
};


export default MovieDetailsPage;