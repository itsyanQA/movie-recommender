import { Header } from "../../components/Header/Header";
import { MovieCatalog } from "../../components/MovieCatalog/MovieCatalog";
import { useFetchMovies } from "../../hooks/useFetchMovies";
import { MovieEndpoints } from "../../models/enums/MovieEndpoints";

export function HomePage() {
  const {
    data: upcomingMovies,
    isLoading,
    isError,
    setPage
  } = useFetchMovies(MovieEndpoints.UPCOMING_TITLES);

  return (
    <>
      <Header />
      <MovieCatalog
        movies={upcomingMovies?.results}
        isLoading={isLoading}
        isError={isError}
        setPage={setPage}
        catalogHeaderText="Upcoming Movies"
      />
    </>
  );
}
