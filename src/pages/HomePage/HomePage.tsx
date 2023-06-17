import { Header } from "../../components/Header/Header";
import { MovieCatalog } from "../../components/MovieCatalog/MovieCatalog";
import { useFetchMovies } from "../../hooks/useFetchMovies";
import { MovieEndpoints } from "../../models/enums/MovieEndpoints";

export function HomePage() {
  const {
    data: upcomingMovies,
    isLoading,
    isError,
    isFetching,
    setPage,
  } = useFetchMovies(MovieEndpoints.UPCOMING_TITLES);

  return (
    <>
      <Header />
      <MovieCatalog
        movies={upcomingMovies?.results}
        isLoading={isLoading}
        isError={isError}
        isFetching={isFetching}
        setPage={setPage}
        catalogHeaderText="Upcoming Movies"
      />
    </>
  );
}
