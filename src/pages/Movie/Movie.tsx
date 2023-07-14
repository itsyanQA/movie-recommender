import { useLocation } from "react-router-dom";
import React from "react";
import { useFetchMovies } from "../../hooks/useFetchMovies";
import { MovieEndpoints } from "../../models/enums/MovieEndpoints";
import { GetMovieByIdParams } from "../../models/types/params";
import { BaseInfoOptions } from "../../models/enums/BaseInfoOptions";

export function Movie() {
  const location = useLocation();
  const movieId: string | undefined = location.pathname.split("/").at(-1);
  const movieByIdParam: GetMovieByIdParams = {
    movieId: movieId as string,
    info: BaseInfoOptions.BASE_INFO
  };
  const { data: movieData, isLoading, isError, isFetching } = useFetchMovies(MovieEndpoints.MOVIE, movieByIdParam);
  console.log(movieData);
  return <h1>this is a movie</h1>;
}
