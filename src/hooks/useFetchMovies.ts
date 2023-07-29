import { MovieEndpoints } from "../models/enums/MovieEndpoints";
import { useGetUpcomingMoviesQuery, useGetMovieByIdQuery, useGetMovieQuery } from "../store/slices/movieApiSlice";

const getMovieApiQuery = (endpoint: MovieEndpoints) => {
  const movieApis = {
    [MovieEndpoints.UPCOMING_TITLES]: useGetUpcomingMoviesQuery,
    [MovieEndpoints.MOVIE_BY_ID]: useGetMovieByIdQuery,
    [MovieEndpoints.MOVIE]: useGetMovieQuery,
  };
  return movieApis[endpoint];
};

export function useFetchMovies(endpoint: MovieEndpoints, endpointParams?: any) {
  const apiQuery = getMovieApiQuery(endpoint);
  const { data, isLoading, isError, isFetching } = apiQuery(endpointParams);

  return { data, isLoading, isError, isFetching };
}
