import {
  Movie,
  OriginalTitleText,
  Plot,
  PrimaryImage,
  RatingsSummary,
  ReleaseDate,
  ReleaseYear,
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
  genres: Genre;
  meterRanking: number;
  id: string;
  originalTitleText: OriginalTitleText;
  plot: Plot;
  primaryImage: PrimaryImage;
  ratingsSummary: RatingsSummary;
  releaseDate: ReleaseDate;
  releaseYear: ReleaseYear;
  runtime: unknown;
  titleText: TitleText;
  titleTypes: TitleType;
}
