import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { getMovieCast } from "../../apiServise/movies";

export default function MovieCast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        const response = await getMovieCast(movieId);
        console.log(response);
        setCast(response.data.cast);
      } catch (error) {
        console.error("Error fetching movie cast:", error);
      }
    };

    fetchMovieCast();
  }, [movieId]);

  console.log("cast location: ", location);

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
}
