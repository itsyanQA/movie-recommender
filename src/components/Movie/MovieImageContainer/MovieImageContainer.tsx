import { CommonMovieProps } from "../../../models/types/CommonMovieProps";
import styles from "./MovieImageContainer.module.scss";
import { PlaceholderCard } from "../../UI/PlaceholderCard/PlaceholderCard";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";

export default function MovieImageContainer({ movie }: CommonMovieProps) {
  return (
    <div className={styles.movieImageContainer}>
      {movie?.primaryImage?.url ? (
        <img className={styles.movieImageContainerImage} src={movie?.primaryImage?.url} alt="movie-image" />
      ) : (
        <PlaceholderCard dimension={{ height: "345px", width: "230px" }} />
      )}
      <div className={styles.movieImageContainerDuration}>
        {movie?.runtime?.displayableProperty?.value?.plainText && (
          <AccessTimeFilledIcon fontSize="small" sx={{ color: "#ffffff" }} />
        )}
        <span className={styles.movieImageContainerDurationTime}>
          {movie?.runtime?.displayableProperty?.value?.plainText}
        </span>
      </div>
    </div>
  );
}
