import { MovieEndpoints } from "../models/enums/MovieEndpoints";
import { useGetUpcomingMoviesQuery, useGetMovieByIdQuery } from "../store/slices/movieApiSlice";

const getMovieApiQuery = (endpoint: MovieEndpoints) => {
  const movieApis = {
    [MovieEndpoints.UPCOMING_TITLES]: useGetUpcomingMoviesQuery,
    [MovieEndpoints.MOVIE]: useGetMovieByIdQuery,
  };
  return movieApis[endpoint];
};

export function useFetchMovies(endpoint: MovieEndpoints, endpointParams?: any) {
  const apiQuery = getMovieApiQuery(endpoint);
  const { data, isLoading, isError, isFetching } = apiQuery(endpointParams);

  return { data, isLoading, isError, isFetching };
}
