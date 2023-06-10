import { PrimaryImage } from "./primary-image.model";
import { ReleaseDate } from "./release-date.model";
import { ReleaseYear } from "./release-year.model";
import { TitleText } from "./title-text.model";
import { TitleType } from "./title-type.model";
import { OriginalTitleText } from "./types/original-title-text.model";

export interface Movie {
  id: string;
  originalTitleText: OriginalTitleText;
  primaryImage: PrimaryImage;
  releaseDate: ReleaseDate;
  releaseYear: ReleaseYear;
  titleText: TitleText;
  titleType: TitleType;
}
