import { useEffect, useState } from "react";
import { getMovieCast } from "../../api/movies";

export const MovieCast = ({ movieId }) => {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        const castData = await getMovieCast(movieId);
        setCast(castData);
      } catch (error) {
        console.error("Error fetching movie cast:", error);
      }
    };

    fetchMovieCast();
  }, [movieId]);

  return (
    <div>
      <h2>Cast</h2>
      <ul>
        {cast.map((actor) => (
          <li key={actor.id}>{actor.name}</li>
        ))}
      </ul>
    </div>
  );
};
