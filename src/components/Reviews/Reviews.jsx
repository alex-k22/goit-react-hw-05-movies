import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovies } from 'API/movies-api';
import css from './Reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams();
  const [review, setReview] = useState([]);

  useEffect(() => {
    const path = `movie/${movieId}/reviews`;
    const fetchData = async () => {
      try {
        const { data } = await fetchMovies(path);
        setReview(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [movieId]);
  return (
    <section>
      {review.length === 0 && <p>We don`t have any reviews for this movie</p>}
      <ul>
        {review.map(review => {
          return (
            <li key={review.id} className={css.item}>
              <h2>{review.author}</h2>
              <p>{review.content}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Reviews;
