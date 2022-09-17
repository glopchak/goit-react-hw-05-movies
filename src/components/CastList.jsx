import PropTypes from 'prop-types';

const defaultPoster = 'https://www.proficinema.ru/assets/images/cnt/poster_no.png';
const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w200';

export const CastList = ({ cast }) => {
  
  return (
    <>
      {
        <ul>
          {cast.slice(0, 4).map(({ id, profile_path, name, character }) => (
            <li key={id}>
              <img
                src={profile_path ? BASE_IMG_URL + profile_path : defaultPoster}
                alt={name}
              />
              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          ))}
        </ul>
      }
    </>
  );
};

CastList.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      character: PropTypes.string,
      profile_path: PropTypes.string,
    }).isRequired
  ),
};
