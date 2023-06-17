import { useState } from "react";
import { MovieEndpoints } from "../models/enums/MovieEndpoints";
import { useGetUpcomingMoviesQuery } from "../store/slices/movieApiSlice";

const getMovieApi = (endpoint: MovieEndpoints) => {
  const movieApis = {
    [MovieEndpoints.UPCOMING_TITLES]: useGetUpcomingMoviesQuery,
  };
  return movieApis[endpoint];
};

export function useFetchMovies(endpoint: MovieEndpoints) {
  const [page, setPage] = useState<number>(1);
  const fetchApi = getMovieApi(endpoint);
  const { data, isLoading, isError } = fetchApi({ limit: 50, page: page.toString() });
  return { data, isLoading, isError, setPage };
}
