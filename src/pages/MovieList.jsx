import Card from "../components/Card";
import useDocTitle from "../hooks/useDocTitle";
import useFetch from "../hooks/useFetch";

const MovieList = ({ apiPath, title }) => {
  const { data: movies } = useFetch(apiPath);
  useDocTitle(title);
  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="  grid sm:grid-cols-2 md:grid-cols-3  gap-4">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default MovieList;
