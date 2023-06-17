import { Header } from "../../components/Header/Header";
import { useGetUpcomingMoviesQuery } from "../../store/slices/movieApiSlice";
import { MovieCatalog } from "../../components/MovieCatalog/MovieCatalog";

export function HomePage() {
  const { data: upcomingMovies, isLoading, isError } = useGetUpcomingMoviesQuery({ limit: 50, sort: "year.incr" });

  return (
    <>
      <Header />
      <MovieCatalog movies={upcomingMovies?.results} isLoading={isLoading} isError={isError} catalogHeaderText="Upcoming Movies" />
    </>
  );
}
