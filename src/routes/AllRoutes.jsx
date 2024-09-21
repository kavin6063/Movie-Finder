import { Routes, Route } from "react-router-dom";
import { MovieList, MovieDetails, Search, PageNotFound } from "../pages";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MovieList apiPath="movie/now_playing" title="Home / Cinibite" />
        }
      />
      <Route path="movie/:id" element={<MovieDetails title="" />} />

      <Route
        path="movies/popular"
        element={
          <MovieList apiPath="movie/popular" title="Popular / Cinibite" />
        }
      />

      <Route
        path="movies/topRated"
        element={
          <MovieList apiPath="movie/top_rated" title="Top rated / Cinibite" />
        }
      />

      <Route
        path="movies/upcoming"
        element={
          <MovieList apiPath="movie/upcoming" title="Upcoming / Cinibite" />
        }
      />

      <Route
        path="search"
        element={<Search apiPath="search/movie" title="" />}
      />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
