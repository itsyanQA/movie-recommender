import { BaseInfoOptions } from "../enums/BaseInfoOptions";

export interface GetUpcomingMoviesParams {
  titleType?: string;
  year?: number;
  genre?: string;
  info?: string;
  endYear?: number;
  limit?: number;
  sort?: string;
  page?: string;
  startYear?: number;
};

export interface GetMovieByIdParams {
  movieId: string;
  info?: BaseInfoOptions;
};
