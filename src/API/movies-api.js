import axios from 'axios';

export const fetchMovies = async (path, query) => {
  const API_KEY = 'b3232dec66f7bb298b28583e91fb7fbe';
  const BASE_URL = 'https://api.themoviedb.org/3/';
  const BASE_SEARCH_PARAMS = {
    api_key: API_KEY,
    language: 'en-US',
    page: '1',
    // orientation: 'horizontal',
    // safesearch: true,
  };
  // const per_page = 12;

  
  return await axios.get(`${BASE_URL}${path}`, {
    params: {
      ...BASE_SEARCH_PARAMS,
      query: query,
      // page: page,
      // per_page: per_page,
    },
  });
};

// import axios from 'axios';

// const options = {
//   method: 'GET',
//   url: 'https://api.themoviedb.org/3/trending/all/day',
//   params: {language: 'en-US'},
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer b3232dec66f7bb298b28583e91fb7fbe'
//   }
// };

// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });

//   import axios from 'axios';

//   const options = {
//     method: 'GET',
//     url: 'https://api.themoviedb.org/3/search/movie',
//     params: {query: 'batman', include_adult: 'false', language: 'en-US', page: '1'},
//     headers: {
//       accept: 'application/json',
//       Authorization: 'Bearer b3232dec66f7bb298b28583e91fb7fbe'
//     }
//   };
  
//   axios
//     .request(options)
//     .then(function (response) {
//       console.log(response.data);
//     })
//     .catch(function (error) {
//       console.error(error);
//     });