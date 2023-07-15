import {
  Genres,
  Movie,
  OriginalTitleText,
  Plot,
  PrimaryImage,
  RatingsSummary,
  ReleaseDate,
  ReleaseYear,
  Runtime,
  TitleText,
  TitleType,
} from "./movie-base-interfaces";
import { Genre } from ".//movie-base-interfaces";

export interface PaginatedResponse {
  page: number;
  next: string;
  entries: number;
  results: Movie[] | unknown[];
}

export interface MovieByIdResponse {
  genres: Genres;
  meterRanking: number;
  id: string;
  originalTitleText: OriginalTitleText;
  plot: Plot;
  primaryImage: PrimaryImage;
  ratingsSummary: RatingsSummary;
  releaseDate: ReleaseDate;
  releaseYear: ReleaseYear;
  runtime: Runtime;
  titleText: TitleText;
  titleTypes: TitleType;
}
