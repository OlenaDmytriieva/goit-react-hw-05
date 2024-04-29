import { useEffect, useState } from "react";
import { searchMovie } from "../apiServise/movies";
import { SearchBar } from "../components/SearchBar/SearchBar";
import { MovieList } from "../components/MovieList/MovieList";
import { useSearchParams } from "react-router-dom";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get("name") ?? "";

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await searchMovie(movieName);
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, [movieName]);

  const updateQueryString = (name) => {
    const nextParams = name !== "" ? { name } : {};
    setSearchParams(nextParams);
  };

  return (
    <main>
      <SearchBar value={movieName} onSubmit={updateQueryString} />
      <MovieList movies={movies} />
    </main>
  );
}
