import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { TitleMovie, Title } from './MovieDetailsPage.styled';

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w300';

 export const MovieDetails = ({ movie }) => {
  const {
    poster_path,
    original_title,
    release_date,
    vote_average,
    overview,
    genres,
  } = movie;
  return (
    <Box display="flex" as="div" p="4">
      <img src={BASE_IMG_URL + poster_path} alt="" />
      <Box px={20}>
        <TitleMovie>
          {original_title} ({release_date.slice(0, 4)})
        </TitleMovie>
        <p>Vote average: {vote_average.toFixed(2)}</p>
        <Title>Overview</Title>
        <p>{overview}</p>
        <Title>Genres</Title>
        <p>{genres.map(genre => genre.name).join(', ')}</p>
      </Box>
    </Box>
  );
};


MovieDetails.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    original_title: PropTypes.string,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.array,
  }),
};