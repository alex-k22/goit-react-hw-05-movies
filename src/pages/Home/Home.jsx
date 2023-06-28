import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from './Home.module.css';
import { fetchMovies } from 'API/movies-api';
import { RiMovie2Fill } from 'react-icons/ri';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const path = 'trending/all/day';

    const fetchData = async () => {
      try {
        const { data } = await fetchMovies(path);
        setTrendingMovies(data.results);
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <h1 className={css.title}>Trending today</h1>
      <ul className={css.list}>
        {trendingMovies.map(movie => {
          return (
            <li key={movie.id} className={css.item}>
              <RiMovie2Fill />
              <Link to={`/movies/${movie.id}`} className={css.link}>
                {movie.title || movie.name}
              </Link>
              <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Home;
