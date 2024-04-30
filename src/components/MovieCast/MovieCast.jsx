import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { getMovieCast } from "../../apiServise/movies";
import style from "./MovieCast.module.css";

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

  console.log(cast);

  return (
    <div>
      {/* <h2>Cast</h2> */}
      <ul>
        {cast.map((actor) => (
          <li key={actor.id}>
            <img
              className={style.actorPhoto}
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                  : "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg"
              }
              alt={actor.name}
              width="200"
            />
            <p>{actor.name}</p>
            <p className={style.character}>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
