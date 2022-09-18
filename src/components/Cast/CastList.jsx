import PropTypes from 'prop-types';
import { CastImg, List, ListItem } from './CastList.stuled';

const defaultPoster = 'https://www.proficinema.ru/assets/images/cnt/poster_no.png';
const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w200';

export const CastList = ({ cast }) => {
  
  return (
    <>
      {
        <List>
          {cast.slice(0, 4).map(({ id, profile_path, name, character }) => (
            <ListItem key={id}>
              <CastImg
                src={profile_path ? BASE_IMG_URL + profile_path : defaultPoster}
                alt={name}
              />
              <p>{name}</p>
              <p>Character: {character}</p>
            </ListItem>
          ))}
        </List>
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
