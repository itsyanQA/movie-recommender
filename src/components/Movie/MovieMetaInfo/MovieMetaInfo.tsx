import styles from "./MovieMetaInfo.module.scss";
import { ImdbLogo } from "../../../assets/imdb-logo";
import StarIcon from "@mui/icons-material/Star";
import { CommonMovieProps } from "../../../models/types/CommonMovieProps";

export default function MovieMetaInfo({ movie }: CommonMovieProps) {
  return (
    <div
      className={styles.metaInfo}
      style={{
        borderBottom: movie?.plot?.plotText?.plainText ? "1px solid white" : "",
      }}
    >
      <div className={styles.metaInfoFirstRow}>
        <ImdbLogo movieId={movie.id} />
        <span
          className={styles.metaInfoDate}
        >{`${movie?.releaseDate?.day}/${movie?.releaseDate?.month}/${movie?.releaseDate?.year}`}</span>
        {movie?.ratingsSummary?.aggregateRating ? (
          <div className={styles.metaInfoRating}>
            <div className={styles.metaInfoRatingStarAndNumber}>
              <StarIcon sx={{ color: "orange" }} fontSize="small" />
              <span className={styles.metaInfoRatingNumber}>{movie?.ratingsSummary?.aggregateRating}</span>
            </div>
            {movie?.ratingsSummary?.voteCount ? (
              <span className={styles.metaInfoRatingVotes}>&nbsp;{`/ ${movie?.ratingsSummary?.voteCount} Votes`}</span>
            ) : null}
          </div>
        ) : null}
      </div>
      <span className={styles.metaInfoGenres}>{movie?.genres?.genres?.map((genre) => genre.text).join("/")}</span>
    </div>
  );
}
