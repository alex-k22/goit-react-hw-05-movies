import { useEffect, useState, useRef } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import { fetchMovies } from 'API/movies-api';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const url = 'https://image.tmdb.org/t/p/w500';
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const path = `movie/${movieId}`;
    const fetchData = async () => {
      try {
        const { data } = await fetchMovies(path);
        setMovie(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [movieId]);

  return (
    <div className={css.wrapper}>
      <Link
        to={backLinkLocationRef.current}
        className={`${css.link} ${css.back}`}
      >
        <BiArrowBack />
        Go back
      </Link>
      <article className={css.article}>
        <img
          src={movie.poster_path ? url + movie.poster_path : ''}
          alt={movie.title}
          width="350"
          height="450"
        />
        <div className={css.profile}>
          <h1>{movie.title}</h1>
          <p>User Score: {(movie.vote_average * 10).toFixed()}%</p>
          <h2 className={css.subheader}>Overview</h2>
          <p>{movie.overview}</p>
          <h2 className={css.subheader}>Genres</h2>
          <p>
            {movie.genres
              ? movie.genres.map(genre => genre.name).join(', ')
              : 'not specified'}
          </p>
        </div>
      </article>

      <div className={css.add}>
        <b>Additional information</b>
        <ul className={css.list}>
          <li className={css.item}>
            <Link to="cast" className={css.link}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" className={css.link}>
              Reviews
            </Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetails;
