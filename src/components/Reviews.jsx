import { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'services/fetchMovies'; 
import PropTypes from 'prop-types';


 const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  
  useEffect(() => {
    fetchReviews(movieId).then(resp =>
      setReviews(resp.data.results)
    );
  }, [movieId]);
  
  return (
    <ul>
      {reviews.map(({ id, author, content }) => (
        <li key={id}>
          <h4>Autor: {author}</h4>
          <p>{content}</p>
        </li>
      ))}
    </ul>
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