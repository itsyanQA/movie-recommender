import {
  AwardsNominations,
  AwardsPrestigiousSummary,
  AwardsWins,
  Edges,
  Genres,
  Movie,
  OriginalTitleText,
  Plot,
  PrimaryImage,
  RatingsSummary,
  ReleaseDate,
  ReleaseYear,
  RevenueLifetimeGross,
  RevenueOpeningWeekendGross,
  RevenueProductionBudget,
  RevenueWorldWideGross,
  Runtime,
  TitleText,
  TitleType,
} from "./movie-base-interfaces";

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

export interface Cast {
  cast: Edges;
  id: string;
  _id: string;
}

export interface Awards {
  id: string;
  nominations: AwardsNominations;
  prestigiousAwardSummary: AwardsPrestigiousSummary;
  wins: AwardsWins;
  _id: string;
}

export interface Revenue {
  id: string;
  lifetimeGross: RevenueLifetimeGross;
  openingWeekendGross: RevenueOpeningWeekendGross;
  productionBudget: RevenueProductionBudget;
  worldWideGross: RevenueWorldWideGross;
}
