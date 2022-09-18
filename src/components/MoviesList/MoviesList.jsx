import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { List, ListItem, ImgTitle} from './MoviesListStyled.styled';
import { Box } from 'components/Box';

const defaultPoster = 'https://www.proficinema.ru/assets/images/cnt/poster_no.png'
const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w300';

export const MoviesList = ({ movies }) => {
    const location = useLocation();
  return (
    <Box display="flex" as="div" p="4">
      <List>
      {movies.map(({ id, poster_path, title }) => (
        <ListItem key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            <img
              width={300}
              src={ 
                poster_path
                  ? BASE_IMG_URL + poster_path
                  : defaultPoster
              }
              alt={title}
            />
            <ImgTitle>{title}</ImgTitle>
          </Link>
        </ListItem>
      ))}
    </List>
    </Box>
    
  );
};


MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      poster_path: PropTypes.string,
      title: PropTypes.string,
    })
  ),
};