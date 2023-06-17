import { Movie } from "./movie.model";

export interface BaseMovieResponse {
  page: number;
  next: string;
  entries: number;
  results: Movie[] | unknown[];
}
