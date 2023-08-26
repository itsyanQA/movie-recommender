import { useFetchMovies } from "./useFetchMovies";
import { GetMovieByIdParams } from "../models/interfaces/params";
import { BaseInfoOptions } from "../models/enums/BaseInfoOptions";
import { MovieEndpoints } from "../models/enums/MovieEndpoints";
import { Awards, Cast, MovieByIdResponse, Revenue } from "../models/interfaces/base-movie-response.model";

export const useFetchMovie = (movieId: string) => {
  // Params for each request
  const movieByIdParam: GetMovieByIdParams = {
    movieId: movieId as string,
    info: BaseInfoOptions.BASE_INFO,
  };
  const movieByIdCastParam: GetMovieByIdParams = {
    movieId: movieId as string,
    info: BaseInfoOptions.EXTENDED_CAST,
  };
  const movieByIdAwardsParam: GetMovieByIdParams = {
    movieId: movieId as string,
    info: BaseInfoOptions.AWARDS,
  };
  const movieByIdRevenueParam: GetMovieByIdParams = {
    movieId: movieId as string,
    info: BaseInfoOptions.REVENUE_BUDGET,
  };

  // Requests
  const {
    data: rawMovieData,
    isLoading,
    isError,
    isFetching,
  } = useFetchMovies(MovieEndpoints.MOVIE_BY_ID, movieByIdParam);
  const { data: rawCast } = useFetchMovies(MovieEndpoints.MOVIE_BY_ID, movieByIdCastParam);
  const { data: rawAwards } = useFetchMovies(MovieEndpoints.MOVIE_BY_ID, movieByIdAwardsParam);
  const { data: rawRevenue } = useFetchMovies(MovieEndpoints.MOVIE_BY_ID, movieByIdRevenueParam);

  // Encapsulate variables
  const movie: MovieByIdResponse = rawMovieData?.results;
  const cast: Cast = rawCast?.results;
  const awards: Awards = rawAwards?.results;
  const revenue: Revenue = rawRevenue?.results;

  return { movie, cast, awards, revenue, isLoading, isError, isFetching };
};
