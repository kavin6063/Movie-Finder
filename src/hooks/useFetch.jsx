import { useEffect, useState } from "react";

const useFetch = (apiPath, query) => {
  const [data, setData] = useState([]);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMTYzMWEyMDY5YWY5MDNjYjlhNTEzZWMxMWU2NWE3ZCIsIm5iZiI6MTcyNTg5NjA0MC41MTQ2ODQsInN1YiI6IjY2ZGYxMjdiZDA0YjhiYzA5ZDNkOGIyMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aEZ8DZOTWVq1SahrMiLemCQjgbJZrq2XFIkJN1WGQhA",
    },
  };
  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(
        `https://api.themoviedb.org/3/${apiPath}?query=${query}`,
        options
      );
      const data = await response.json();
      setData(data.results);
    }

    fetchMovies();
  }, [apiPath, query]);
  return {
    data,
  };
};

export default useFetch;
