import { useState } from "react";
import Card from "../components/Card";

const Search = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query) return;
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}&language=en-US&page=1`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMTYzMWEyMDY5YWY5MDNjYjlhNTEzZWMxMWU2NWE3ZCIsIm5iZiI6MTcyNTg5NjA0MC41MTQ2ODQsInN1YiI6IjY2ZGYxMjdiZDA0YjhiYzA5ZDNkOGIyMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aEZ8DZOTWVq1SahrMiLemCQjgbJZrq2XFIkJN1WGQhA",
        },
      }
    );
    const data = await response.json();
    setMovies(data.results);
  };

  return (
    <main className="max-w-7xl mx-auto py-7">
      <form onSubmit={handleSearch} className="flex mb-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a movie..."
          className="p-2 border rounded-l-md flex-grow"
        />
        <button
          type="submit"
          className="p-2 bg-blue-700 text-white rounded-r-md"
        >
          Search
        </button>
      </form>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {movies.map((movie) => (
          <Card
            key={movie.id}
            title={movie.title}
            imageUrl={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            description={movie.overview}
          />
        ))}
      </div>
    </main>
  );
};

export default Search;
