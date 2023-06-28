import { useSearchParams, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovies } from 'API/movies-api';
import { BsSearch } from 'react-icons/bs';
import { RiMovie2Fill } from 'react-icons/ri';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from './Movies.module.css';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams('');
  const [movies, setMovies] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const location = useLocation();

  const handleQueryChange = e => {
    setInputValue(e.target.value);
  };

  const query = searchParams.get('query') ?? '';
  useEffect(() => {
    if (query === '') return;

    setInputValue(query);
    const path = 'search/movie';
    const queryParams = `${query}`;

    const fetchData = async () => {
      try {
        const { data } = await fetchMovies(path, queryParams);
        setMovies(data.results);

        if (data.results.length === 0) {
          toast.error('Sorry, but nothing found');
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: e.target.elements.input.value.trim() });
  };

  return (
    <>
      <form className={css.SearchForm} onSubmit={handleSubmit}>
        <input
          className={css['SearchForm-input']}
          type="text"
          autoComplete="off"
          autoFocus
          name="input"
          required
          placeholder="Search movies"
          onChange={handleQueryChange}
          value={inputValue}
        />
        <button type="submit" className={css.SearchFormButton}>
          <BsSearch />
          <span className={css['SearchForm-button-label']}>Search</span>
        </button>
      </form>
      <ul className={css.list}>
        {movies.map(movie => {
          return (
            <>
              <li key={movie.id} className={css.item}>
                <Link
                  to={`/movies/${movie.id}`}
                  state={{ from: location }}
                  className={css.link}
                >
                  <RiMovie2Fill className={css.icon} />
                  {movie.title || movie.name}
                </Link>
              </li>
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
            </>
          );
        })}
      </ul>
    </>
  );
};

export default Movies;
