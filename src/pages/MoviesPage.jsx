import { useEffect, useState } from "react";
// import { getTopMovies } from "../apiService/movies";
import { MovieList } from "../components/MovieList/MovieList";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);

  // useEffect(() => {
  //   const fetchTopMovies = async () => {
  //     try {
  //       const topMovies = await getTopMovies();
  //       setMovies(topMovies);
  //     } catch (error) {
  //       console.error("Error fetching top movies:", error);
  //     }
  //   };

  //   fetchTopMovies();
  // }, []);

  console.log(movies);

  return (
    <main>
      <p>movies page</p>
      <h1>Trending today</h1>
      {/* <MovieList movies={movies} /> */}
    </main>
  );
}
