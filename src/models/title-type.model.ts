import { Categories } from "./categories.model";
import { DisplayableProperty } from "./displayable-property.model";

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
