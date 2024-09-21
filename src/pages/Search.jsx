import { useSearchParams } from "react-router-dom";
import Card from "../components/Card";
import useFetch from "../hooks/useFetch";

const Search = ({ apiPath }) => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const { data: movies } = useFetch(apiPath, query);

  return (
    <main>
      <section>
        <p className="text-lg italic font-bold">
          {movies.length === 0
            ? `No Results Found For (${query})`
            : `${movies.length} results for (${query})`}
        </p>
      </section>

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

export default Search;
