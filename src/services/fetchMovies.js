import axios from 'axios';


const API_KEY = 'bfe20768c956c05046c7d088e4b361cd';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';


export const fetchTrendingMovies = async () => {
    const resp = await axios.get(`/trending/all/day?api_key=${API_KEY}`);
    return resp.data;
  };

  export const fetchMoviesByQuery = async query => {
    const resp = await axios.get(
      `/search/movie?api_key=${API_KEY}&query=${query}`
    );
    return resp.data;
  };

  export const fetchMovieById = async movieId => {
    const movie = await axios.get(`/movie/${movieId}?api_key=${API_KEY}`);
    return movie;
  };


  export const fetchCast = async movieId => {
    const cast = await axios.get(`/movie/${movieId}/credits?api_key=${API_KEY}`);
    return cast.data;
  };
  export const fetchReviews = async movieId => {
    const reviews = await axios.get(
      `/movie/${movieId}/reviews?api_key=${API_KEY}`
    );
    return reviews;
  };