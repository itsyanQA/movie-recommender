import { MovieCatalog } from "../../components/MovieCatalog/MovieCatalog";
import { useFetchMovies } from "../../hooks/useFetchMovies";
import { usePagination } from "../../hooks/usePagination";
import { MovieEndpoints } from "../../models/enums/MovieEndpoints";
import { TitleTypes } from "../../models/enums/TitleTypes";

export function Upcoming() {
  const { page, setPage } = usePagination();
  const upcomingMovieParams = {
    limit: 50,
    page: page.toString(),
    titleType: TitleTypes.MOVIE,
  };
  const {
    data: upcomingMovies,
    isLoading,
    isError,
    isFetching,
  } = useFetchMovies(MovieEndpoints.UPCOMING_TITLES, upcomingMovieParams);

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
