import { MovieCatalog } from "../../components/MovieCatalog/MovieCatalog/MovieCatalog";
import { useFetchMovies } from "../../hooks/useFetchMovies";
import { MovieEndpoints } from "../../models/enums/MovieEndpoints";
import { MovieListOptions } from "../../models/enums/MovieListOptions";
import { Sort } from "../../models/enums/Sort";
import { TitleTypes } from "../../models/enums/TitleTypes";

export function HomePage() {
  const LIMIT_PER_CATALOG = 20;

  const upcomingMovieParams = {
    limit: LIMIT_PER_CATALOG,
    titleType: TitleTypes.MOVIE,
  };
  const mostPopularMoviesParams = {
    limit: LIMIT_PER_CATALOG,
    titleType: TitleTypes.MOVIE,
    list: MovieListOptions.TOP_RATED_250,
    sort: Sort.YEAR_DESCENDING,
  };

  const {
    data: upcomingMovies,
    isLoading: isUpcomingLoading,
    isError: isUpcomingError,
    isFetching: isUpcomingFetching,
  } = useFetchMovies(MovieEndpoints.UPCOMING_TITLES, upcomingMovieParams);

  const {
    data: topRated,
    isLoading: isTopRatedLoading,
    isError: isTopRatedError,
    isFetching: isTopRatedFetching,
  } = useFetchMovies(MovieEndpoints.MOVIE, mostPopularMoviesParams);

  return (
    <>
      <MovieCatalog
        movies={topRated?.results}
        isLoading={isTopRatedLoading}
        isError={isTopRatedError}
        isFetching={isTopRatedFetching}
        catalogHeaderText="Top Rated"
        shouldShowPagination={false}
      />
      <MovieCatalog
        movies={upcomingMovies?.results}
        isLoading={isUpcomingLoading}
        isError={isUpcomingError}
        isFetching={isUpcomingFetching}
        catalogHeaderText="Upcoming Movies"
        shouldShowPagination={false}
      />
    </>
  );
}
