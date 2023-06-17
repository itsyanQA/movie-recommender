import { MovieCatalog } from "../../components/MovieCatalog/MovieCatalog";
import { useFetchMovies } from "../../hooks/useFetchMovies";
import { MovieEndpoints } from "../../models/enums/MovieEndpoints";

export function Upcoming() {
  const {
    data: upcomingMovies,
    isLoading,
    isError,
    isFetching,
    page,
    setPage,
  } = useFetchMovies(MovieEndpoints.UPCOMING_TITLES);

  return (
    <>
      <MovieCatalog
        movies={upcomingMovies?.results}
        isLoading={isLoading}
        isError={isError}
        isFetching={isFetching}
        page={page}
        setPage={setPage}
        catalogHeaderText="Upcoming Movies"
      />
    </>
  );
}
