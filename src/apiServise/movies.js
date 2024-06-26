import axios from "axios";

// const API_KEY = "TDPRPm7UqZ8pVTZVBZEOKeKNPMQO9BdGMj1FDyslSZI";
// axios.defaults.baseURL = "https://api.unsplash.com/photos/";
// axios.defaults.headers.common["Authorization"] = API_KEY;
// axios.defaults.params = {
//   orientation: "landscape",
//   per_page: 12,
// };

// export const getPhotos = async (query, page) => {
//   const { data } = await axios.get(
//     `https://api.unsplash.com/search/photos?query=${query}&page=${page}&per_page=12&orientation=landscape&client_id=TDPRPm7UqZ8pVTZVBZEOKeKNPMQO9BdGMj1FDyslSZI`
//   );

//   return data;
// };

const url =
  "https://api.themoviedb.org/3/trending/movie/day?include_adult=false&language=en-US&page=1";
const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YjMxZjBlYmI4NGU5MGUzYzNjZjQ2ZDRmYWE5MTEwYiIsInN1YiI6IjY2Mjc4NzZkN2E5N2FiMDE2MzhlMTExNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ejbMAd2QLD-ZyNLcDf5g5wqgAAXGe710wHe3lsHXeIA",
  },
};

export const getTopMovies = async () => {
  const { movies } = await axios.get(url, options);
  return movies;
};

const apiGet = async (path) => {
  return await axios.get("https://api.themoviedb.org/3/" + path, options);
};

export const getTopMovies2 = async () => {
  return apiGet("trending/movie/day?include_adult=false&language=en-US&page=1");
};

export const searchMovie = async (query) => {
  return apiGet(
    `search/movie?include_adult=false&language=en-US&page=1&query=${query}`
  );
};

export const getMovieDetailes = async (id) => {
  return apiGet(`movie/${id}?language=en-US`);
};

export const getMovieCast = async (id) => {
  return apiGet(`movie/${id}/credits?language=en-US`);
};

export const getMovieReviews = async (id) => {
  return apiGet(`movie/${id}/reviews?language=en-US&page=1`);
};
