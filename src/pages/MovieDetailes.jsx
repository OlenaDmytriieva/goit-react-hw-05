import { useEffect, useState, Suspense } from "react";
import { useParams, Link, Outlet, useLocation } from "react-router-dom";
import { BackLink } from "../components/BackLink/BackLink";
import { getMovieDetailes } from "../apiServise/movies";
import style from "../components/MovieDetailes/MovieDetailes.module.css";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  // const paragraphRef = useRef(null);
  const backLinkHref = location.state ?? "/";

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await getMovieDetailes(movieId);
        setMovie(response.data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  console.log(movie);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* <p>movie details {movieId}</p> */}
      <BackLink to={backLinkHref}>Go back</BackLink>
      <div className={style.movieOverview}>
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
              : "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg"
          }
          alt={movie.title}
          width="300"
        />

        <div className={style.movieInfo}>
          <h1>{movie.title}</h1>
          <p>Rating: {movie.vote_average.toFixed(2)}</p>
          <h2>Overview</h2>
          <p>{movie.overview}</p>
          <h2>Genres</h2>
          <ul className={style.genresList}>
            {movie.genres.map((genre) => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </div>
      </div>
      <h3>Additional information</h3>
      <ul className={style.addInfoList}>
        <li>
          <Link
            to="cast"
            state={location.state}
            className={style.addInfo}
            onClick={() => window.scrollTo({ top: 500, behavior: "smooth" })}
            // onClick={() =>
            //   window.scrollTo({
            //     top: paragraphRef.current.offsetTop,
            //     behavior: "smooth",
            //   })
            // }
          >
            Cast
          </Link>
        </li>
        <li>
          <Link
            to="reviews"
            state={location.state}
            className={style.addInfo}
            onClick={() => window.scrollTo({ top: 500, behavior: "smooth" })}
            // onClick={() =>
            //   window.scrollTo({
            //     top: paragraphRef.current.offsetTop,
            //     behavior: "smooth",
            //   })
            // }
          >
            Reviews
          </Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
