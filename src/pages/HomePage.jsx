import {useState, useEffect } from 'react';
import { fetchTrendingMovies } from "services/fetchMovies";
import {MoviesList} from 'components/MoviesList/MoviesList'

 const HomePage = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
      fetchTrendingMovies().then(data => setMovies(data.results));
    }, []);
  
    return (
      <>
        <h1>Trending today</h1>
        <MoviesList movies={movies} />
      </>
    );
  };
  export default HomePage;
