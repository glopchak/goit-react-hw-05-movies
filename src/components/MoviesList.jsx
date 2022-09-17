import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

const defaultPoster = 'https://www.proficinema.ru/assets/images/cnt/poster_no.png'
const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w300';

export const MoviesList = ({ movies }) => {
    const location = useLocation();
  return (
    <div>
      {movies.map(({ id, poster_path, title }) => (
        <li key={id}>
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
            {title}
          </Link>
        </li>
      ))}
    </div>
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