import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { fetchMoviesByQuery } from 'services/fetchMovies';


 const MoviePage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  useEffect(() => {
    if (query) {
      fetchMoviesByQuery(query).then(data => setMovies(data.results));
    }
  }, [query]);
  const onSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: e.target.elements.query.value });
  };
  return (
    <>
      <SearchBar onSubmit={onSubmit} query={query} />
      {movies.length > 0 && <MoviesList movies={movies} />}
    </>
  );
};

export default MoviePage;