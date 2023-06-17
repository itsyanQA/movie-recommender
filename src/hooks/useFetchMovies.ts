import { useState } from "react";
import { MovieEndpoints } from "../models/enums/MovieEndpoints";
import { useGetUpcomingMoviesQuery } from "../store/slices/movieApiSlice";
import { TitleTypes } from "../models/enums/TitleTypes";

const getMovieApi = (endpoint: MovieEndpoints) => {
  const movieApis = {
    [MovieEndpoints.UPCOMING_TITLES]: useGetUpcomingMoviesQuery,
  };
  return movieApis[endpoint];
};

export function useFetchMovies(endpoint: MovieEndpoints, responseLimit: number = 50) {
  const [page, setPage] = useState<number>(1);
  const fetchApi = getMovieApi(endpoint);
  const { data, isLoading, isError, isFetching } = fetchApi({
    limit: responseLimit,
    page: page.toString(),
    titleType: TitleTypes.MOVIE,
  });

  return { data, isLoading, isError, isFetching, page, setPage };
}
