export interface Caption {
  plainText: string;
}

export interface Categories {
  value: string;
}

export interface DisplayablePropertyValue {
  plainText: string;
}

export interface DisplayableProperty {
  value: DisplayablePropertyValue;
}

export interface PrimaryImage {
  caption: Caption;
  height: number;
  id: string;
  url: string;
  width: number;
}

export interface ReleaseDate {
  day: number;
  month: number;
  year: number;
}

export interface ReleaseYear {
  endYear: number | null;
  year: number;
}

export interface TitleText {
  titleText: string;
}

export interface TitleType {
  canHaveEpisodes: boolean;
  categories: Categories[];
  displayableProperty: DisplayableProperty;
  id: string;
  isEpisode: boolean;
  isSeries: boolean;
  text: string;
}

export interface PrimaryImage {
  caption: Caption;
  height: number;
  id: string;
  url: string;
  width: number;
}

export interface OriginalTitleText {
  text: string;
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
}

export interface Genres {
  genres: Genre[];
}

interface Language {
  id: string;
}

interface PlotText {
  plainText: string;
}

export interface Plot {
  language: Language;
  plotText: PlotText;
}

export interface RatingsSummary {
  aggregateRating: number;
  voteCount: number;
}

export interface Runtime {
  displayableProperty: DisplayableProperty;
  seconds: number;
}

export interface Edges {
  edges: NodeWrapper[];
}

export interface NodeWrapper {
  node: CastNode;
}

export interface CastNode {
  attributes: unknown;
  category: CastCategory;
  characters: CastCharacters;
  episodeCredits: CastEpisodeCredits;
  name: CastName;
}

interface CastCategory {
  id: string;
}

interface CastCharacters {
  name: string;
}

interface CastEpisodeCredits {
  total: number;
  yearRange: string;
}

interface CastName {
  id: string;
  nameText: CastNameText;
  primaryImage: CastPrimaryImage;
}

interface CastNameText {
  text: string;
}

interface CastPrimaryImage {
  height: number;
  url: string;
  width: number;
}

export interface AwardsNominations {
  total: number;
}

export interface AwardsPrestigiousSummary {
  award: Award;
  nominations: number;
  wins: number;
}

export interface AwardsWins {
  total: number;
}

interface Award {
  event: AwardEvent;
  id: string;
  text: string;
}

interface AwardEvent {
  id: string;
}

export interface RevenueLifetimeGross {
  total: TotalAmount;
}

export interface RevenueOpeningWeekendGross {
  gross: TotalAmount;
  weekendEndDate: string;
}

export interface RevenueProductionBudget {
  budget: TotalAmount;
}

export interface RevenueWorldWideGross {
  total: TotalAmount;
}

interface TotalAmount {
  amount: number;
  currency: string;
}
