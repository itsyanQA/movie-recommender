import styles from "./Movie.module.scss";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import StarIcon from "@mui/icons-material/Star";
import { useLocation } from "react-router-dom";
import { useFetchMovies } from "../../hooks/useFetchMovies";
import { MovieEndpoints } from "../../models/enums/MovieEndpoints";
import { GetMovieByIdParams } from "../../models/interfaces/params";
import { BaseInfoOptions } from "../../models/enums/BaseInfoOptions";
import { MovieByIdResponse } from "../../models/interfaces/base-movie-response.model";
import { CircularLoading } from "../../components/UI/CircularLoading/CircularLoading";
import { ErrorMessage } from "../../styled/ErrorMessage";
import { FETCH_ERROR_TEXT } from "../../constants/Text";
import { PlaceholderCard } from "../../components/UI/PlaceholderCard/PlaceholderCard";
import { ImdbLogo } from "../../assets/imdb-logo";
import { useFetchMovie } from "../../hooks/useFetchMovie";

export function Movie() {
  const location = useLocation();
  const movieId: string | undefined = location.pathname.split("/").at(-1);
  const { movie, cast, awards, revenue, isLoading, isError, isFetching } = useFetchMovie(movieId as string);
  if (isLoading || isFetching) {
    return <CircularLoading />;
  } else if (isError) {
    return <ErrorMessage>{FETCH_ERROR_TEXT}</ErrorMessage>;
  }

  const renderImageContainer = (): JSX.Element => {
    return (
      <div className={styles.movieInfoImageContainer}>
        {movie?.primaryImage?.url ? (
          <img className={styles.movieInfoImageContainerImage} src={movie?.primaryImage?.url} alt="movie-image" />
        ) : (
          <PlaceholderCard dimension={{ height: "345px", width: "230px" }} />
        )}
        <div className={styles.movieInfoImageContainerDuration}>
          {movie?.runtime?.displayableProperty?.value?.plainText && (
            <AccessTimeFilledIcon fontSize="small" sx={{ color: "#ffffff" }} />
          )}
          <span className={styles.movieInfoImageContainerDurationTime}>
            {movie?.runtime?.displayableProperty?.value?.plainText}
          </span>
        </div>
        <span className={styles.movieInfoImageContainerGenre}>
          {movie?.genres?.genres?.map((genre) => genre.text).join("/")}
        </span>
      </div>
    );
  };

  return (
    <div className={styles.movieInfo}>
      {renderImageContainer()}
      <div className={styles.movieInfoContent}>
        <h1 className={styles.movieInfoContentTitle}>{movie?.originalTitleText?.text}</h1>
        <div
          className={styles.movieInfoContentMetaInfo}
          style={{
            borderBottom: movie?.plot?.plotText?.plainText ? "1px solid white" : "",
            maxWidth: movie?.plot?.plotText?.plainText ? "50%" : "",
          }}
        >
          <ImdbLogo movieId={movieId} />
          <span
            className={styles.movieInfoContentDate}
          >{`${movie?.releaseDate?.day}/${movie?.releaseDate?.month}/${movie?.releaseDate?.year}`}</span>
          {movie?.ratingsSummary?.aggregateRating ? (
            <div className={styles.movieInfoContentMetaInfoRating}>
              <StarIcon sx={{ color: "orange" }} fontSize="small" />
              <span className={styles.movieInfoContentMetaInfoRatingNumber}>
                {movie?.ratingsSummary?.aggregateRating}
              </span>
              {movie?.ratingsSummary?.voteCount ? (
                <span className={styles.movieInfoContentMetaInfoRatingVotes}>
                  &nbsp;{`/ ${movie?.ratingsSummary?.voteCount} Votes`}
                </span>
              ) : null}
            </div>
          ) : null}
        </div>
        <p className={styles.movieInfoContentSummary}>{movie?.plot?.plotText?.plainText}</p>
      </div>
    </div>
  );
}
