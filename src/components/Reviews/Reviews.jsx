import { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'services/fetchMovies'; 
import PropTypes from 'prop-types';
import { ReviewTitle, ListItem } from './Reviews.styled';
import { Box } from 'components/Box';


 const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  
  useEffect(() => {
    fetchReviews(movieId).then(resp =>
      setReviews(resp.data.results)
    );
  }, [movieId]);
  
  return (
    <Box  as="div" pt="4">
      <ul>
      {reviews.map(({ id, author, content }) => (
        <ListItem key={id}>
          <ReviewTitle>Autor: {author}</ReviewTitle>
          <p>{content}</p>
        </ListItem>
      ))}
    </ul>
    </Box>

  );
};

export default Reviews; 

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      author: PropTypes.string,
      content: PropTypes.string,
    }).isRequired
  ),
}