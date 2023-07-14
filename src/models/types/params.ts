import { BaseInfoOptions } from "../enums/BaseInfoOptions";

export type GetUpcomingMoviesParams = {
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

export type GetMovieByIdParams = {
  movieId: string;
  info?: BaseInfoOptions;
};
