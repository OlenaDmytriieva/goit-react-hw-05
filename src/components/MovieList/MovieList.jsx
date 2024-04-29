// import { Link, useLocation } from "react-router-dom";
// // import style from "./MovieList.module.css";

// export const MovieList = ({ movies }) => {
//   const location = useLocation();

//   return (
//     <div>
//       {movies.map((movie) => (
//         <div key={movie.id}>
//           <Link to={`${movie.id}`} state={location}>
//             <h3>{movie.name}</h3>
//           </Link>
//         </div>
//       ))}
//     </div>
//   );
// };

import { Link, useLocation } from "react-router-dom";

export function MovieList({ movies }) {
  const location = useLocation();

  return (
    <div>
      <p>Movies list</p>
      {movies.map((movie) => (
        <div key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={location}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
              width="42"
            />
            <h3>{movie.title}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
}
