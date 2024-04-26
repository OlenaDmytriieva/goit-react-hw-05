import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
// import { BackLink } from "../components/BackLink/BackLink";
// import { getMovieDetails } from "../api/movies";
// import { MovieCast } from "../components/MovieCast/MovieCast";
// import { MovieReviews } from "../components/MovieReviews/MovieReviews";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  // useEffect(() => {
  //   const fetchMovieDetails = async () => {
  //     try {
  //       const movieDetails = await getMovieDetails(movieId);
  //       setMovie(movieDetails);
  //     } catch (error) {
  //       console.error("Error fetching movie details:", error);
  //     }
  //   };

  //   fetchMovieDetails();
  // }, [movieId]);

  const handleGoBack = () => {
    navigate(-1);
  };

  // if (!movie) {
  //   return <div>Loading...</div>;
  // }

  console.log(movieId);

  return (
    <div>
      <p>movie details {movieId}</p>
      {/* <BackLink onClick={handleGoBack}>Go back</BackLink>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <MovieCast movieId={movieId} />
      <MovieReviews movieId={movieId} /> */}
    </div>
  );
}
