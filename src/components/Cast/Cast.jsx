import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovies } from "API/movies-api";
import css from './Cast.module.css'

const Cast = () => {
const { movieId } = useParams();
const [cast, setCast] = useState([]);
const url = 'https://image.tmdb.org/t/p/w500';

useEffect(() => {
    const path = `movie/${movieId}/credits`;
    const fetchData = async () => {
      try {
        const { data } = await fetchMovies(path);
        setCast(data.cast);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [movieId, setCast]);

  
  return (
    <section>
      {cast.length === 0 && <p>We don`t have any cast for this movie</p>}
      <ul className={css.list}>
        {cast.map(item => {
          return (
            <li key={item.id} className={css.item}>
              <img
                className={css.img}
                src={item.profile_path ? `${url}${item.profile_path}` : ''}
                alt={item.name}
                width="100"
              />
              <div>
              <h3 className={css.name}>{item.name}</h3>
              <p className={css.character}> Character: {item.character}</p>
              </div>

            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Cast;