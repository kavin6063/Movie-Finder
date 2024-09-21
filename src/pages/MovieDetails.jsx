import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { options } from "../utils/Option";
import DetailsLoader from "../components/shared/DetailsLoader";
import useDocTitle from "../hooks/useDocTitle";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true); // State to manage loading

  const {
    homepage,
    title,
    vote_average,
    release_date,
    genres = [],
    runtime,
    overview,
    backdrop_path,
    poster_path,
  } = movie;
  useDocTitle(` ${title} | Cinibite`);
  const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
  const image = `https://image.tmdb.org/t/p/w500${poster_path}`;
  const bgImg = `https://image.tmdb.org/t/p/original${backdrop_path}`;

  useEffect(() => {
    async function fetchMovieDetails() {
      const response = await fetch(url, options);
      const data = await response.json();
      setMovie(data);
      setLoading(false); // Set loading to false after fetching data
    }
    fetchMovieDetails();
  }, [id]);

  // Loading Skeleton
  if (loading) {
    return <DetailsLoader />;
  }

  return (
    <main>
      {movie ? (
        <div className="relative bg-gray-800 text-white mt-1">
          <div className="absolute inset-0">
            <img
              className="w-full h-full object-cover opacity-40"
              src={bgImg}
              alt={title}
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>

          <div className="relative max-w-7xl mx-auto py-16 px-4 lg:px-8 flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/4">
              <img className="rounded-lg shadow-lg" src={image} alt={title} />
            </div>

            <div className="w-full lg:w-3/4 lg:pl-10">
              <h1 className="text-4xl font-bold mb-4">{title}</h1>

              <div className="flex items-center space-x-3 mb-4">
                <span className="bg-yellow-500 text-black py-1 px-3 rounded-md font-semibold">
                  {vote_average * 10}% Score
                </span>

                <span className="border border-gray-300 py-1 px-3 rounded-md">
                  {release_date}
                </span>

                <span className="border border-gray-300 py-1 px-3 rounded-md">
                  {runtime} min
                </span>
              </div>

              <p className="text-gray-300 mb-6">
                <span className="font-semibold">Genres:</span>{" "}
                {genres.map((genre) => genre.name).join(", ")}
              </p>

              <p className="text-gray-100 text-lg mb-6">{overview}</p>

              <a
                href={homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
              >
                Watch Trailer
              </a>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading movie details...</p>
      )}
    </main>
  );
};

export default MovieDetails;
