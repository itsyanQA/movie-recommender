import { Header } from "../../components/Header/Header";
import { MovieCatalog } from "../../components/MovieCatalog/MovieCatalog";
import { useFetchMovies } from "../../hooks/useFetchMovies";
import { MovieEndpoints } from "../../models/enums/MovieEndpoints";

export function HomePage() {
  const RESPONSE_LIMIT = 20;
  const {
    data: upcomingMovies,
    isLoading,
    isError,
    isFetching,
    page,
    setPage,
  } = useFetchMovies(MovieEndpoints.UPCOMING_TITLES, RESPONSE_LIMIT);

  return (
    <MovieCatalog
      movies={upcomingMovies?.results}
      isLoading={isLoading}
      isError={isError}
      isFetching={isFetching}
      page={page}
      setPage={setPage}
      catalogHeaderText="Upcoming Movies"
      shouldShowPagination={false}
    />
  );
}
