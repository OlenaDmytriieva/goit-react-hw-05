import { getTopMovies2 } from "../apiServise/movies";
import { MovieList } from "../components/MovieList/MovieList";
import { useEffect, useState } from "react";

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTopMovies = async () => {
      try {
        const response = await getTopMovies2();
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching top movies:", error);
      }
    };

    fetchTopMovies();
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      {movies && <MovieList movies={movies} />}
    </main>
  );
}
