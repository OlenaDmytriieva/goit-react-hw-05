import { useEffect, useState, Suspense } from "react";
import { useParams, Link, Outlet, useLocation } from "react-router-dom";
import { BackLink } from "../components/BackLink/BackLink";
import { getMovieDetailes } from "../apiServise/movies";
// import { MovieCast } from "../components/MovieCast/MovieCast";
// import { MovieReviews } from "../components/MovieReviews/MovieReviews";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();

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

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <p>movie details {movieId}</p>
      <BackLink to={backLinkHref}>Go back</BackLink>
      <h1>{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
        // width="42"
      />
      <p>{movie.overview}</p>
      <p>Additional information</p>
      <ul>
        <li>
          <Link to="cast" state={location.state}>
            Cast
          </Link>
        </li>
        <li>
          <Link to="reviews" state={location.state}>
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
