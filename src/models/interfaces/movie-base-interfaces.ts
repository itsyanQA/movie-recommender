export interface Caption {
  plainText: string;
  __typename: string;
}

export interface Categories {
  value: string;
  __typename: string;
}

export interface DisplayablePropertyValue {
  plainText: string;
  __typename: string;
}

export interface DisplayableProperty {
  value: DisplayablePropertyValue;
  __typename: string;
}

export interface PrimaryImage {
  caption: Caption;
  height: number;
  id: string;
  url: string;
  width: number;
  __typename: string;
}

export interface ReleaseDate {
  day: number;
  month: number;
  year: number;
  __typename: string;
}

export interface ReleaseYear {
  endYear: number | null;
  year: number;
  __typename: string;
}

export interface TitleText {
  titleText: string;
  __typename: string;
}

export interface TitleType {
  canHaveEpisodes: boolean;
  categories: Categories[];
  displayableProperty: DisplayableProperty;
  id: string;
  isEpisode: boolean;
  isSeries: boolean;
  text: string;
  __typename: string;
}

export interface PrimaryImage {
  caption: Caption;
  height: number;
  id: string;
  url: string;
  width: number;
  __typename: string;
}

export interface OriginalTitleText {
  text: string;
  __typename: string;
}

export interface Movie {
  id: string;
  originalTitleText: OriginalTitleText;
  primaryImage: PrimaryImage;
  releaseDate: ReleaseDate;
  releaseYear: ReleaseYear;
  titleText: TitleText;
  titleType: TitleType;
}

export interface Genre {
  id: string;
  text: string;
  __typename: string;
}

export interface Genres {
  genres: Genre[];
}

interface Language {
  id: string;
  __typename: string;
}

interface PlotText {
  plainText: string;
  __typename: string;
}

export interface Plot {
  language: Language;
  plotText: PlotText;
  __typename: string;
}

export interface RatingsSummary {
  aggregateRating: number;
  voteCount: number;
}

export interface Runtime {
  displayableProperty: DisplayableProperty;
  seconds: number;
  __typename: string;
}
