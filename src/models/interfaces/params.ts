import { BaseInfoOptions } from "../enums/BaseInfoOptions";
import { MovieListOptions } from "../enums/MovieListOptions";

export interface CommonMovieParams {
  titleType?: string;
  year?: number;
  genre?: string;
  info?: string;
  endYear?: number;
  limit?: number;
  sort?: string;
  page?: string;
  startYear?: number;
}

export interface GetMovieByIdParams {
  movieId: string;
  info?: BaseInfoOptions;
}

export interface GetMovieParams extends CommonMovieParams {
  list?: MovieListOptions;
}
