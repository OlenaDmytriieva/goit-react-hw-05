// import { SearchBar } from "./components/SearchBar/SearchBar";
import { Container } from "./components/Container/Container";
import { Section } from "./components/Section/Section";
import { Routes, Route } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";

import { lazy, Suspense } from "react";
import { Navigation } from "./components/Navigation/Navigation";

const Home = lazy(() => import("./pages/Home"));
const MoviesPage = lazy(() => import("./pages/MoviesPage"));
const MovieDetailes = lazy(() => import("./pages/MovieDetailes"));
// const MovieCast = lazy(() => import("./components/MovieCast"));
// const MovieList = lazy(() => import("./components/MovieList"));
// const MovieReview = lazy(() => import("./components/MovieReviews"));

export default function App() {
  return (
    <Section>
      <Container>
        <div>
          <Navigation />
          <Suspense fallback={<div>Loading page...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/movies/:movieId" element={<MovieDetailes />} />
              <Route path="/movies" element={<MoviesPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </div>
      </Container>
    </Section>
  );
}
