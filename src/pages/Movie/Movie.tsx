import styles from "./Movie.module.scss";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
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

export function Movie() {
  const location = useLocation();
  const movieId: string | undefined = location.pathname.split("/").at(-1);
  const movieByIdParam: GetMovieByIdParams = {
    movieId: movieId as string,
    info: BaseInfoOptions.BASE_INFO,
  };
  const { data, isLoading, isError, isFetching } = useFetchMovies(MovieEndpoints.MOVIE, movieByIdParam);
  const movie: MovieByIdResponse = data?.results;

  if (isLoading || isFetching) {
    return <CircularLoading />;
  } else if (isError) {
    return <ErrorMessage>{FETCH_ERROR_TEXT}</ErrorMessage>;
  }

  const renderImageContainer = (): JSX.Element => {
    return (
      <div className={styles.movieInfoImageContainer}>
        {movie?.primaryImage?.url ? (
          <img className={styles.movieInfoImageContainerImage} src={movie?.primaryImage?.url} />
        ) : (
          <PlaceholderCard dimension={{ height: "345px", width: "230px" }} />
        )}
        <div className={styles.movieInfoImageContainerDuration}>
          {movie?.runtime?.displayableProperty?.value?.plainText && <AccessTimeFilledIcon fontSize="small" />}
          <span className={styles.movieInfoImageContainerDurationTime}>
            {movie?.runtime?.displayableProperty?.value?.plainText}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.movieInfo}>
      {renderImageContainer()}
      <div className={styles.movieInfoContent}>
        <div className={styles.movieInfoContentTop}>
          <h2 className={styles.movieInfoContentTopTitle}>{movie?.originalTitleText?.text}</h2>
          <span
            className={styles.movieInfoContentTopDate}
          >{`${movie?.releaseDate?.day}/${movie?.releaseDate?.month}/${movie?.releaseDate?.year}`}</span>
          <span className={styles.movieInfoContentTopDirectedby}></span>
        </div>
        <p className={styles.movieInfoContentSummary}>{movie?.plot?.plotText?.plainText}</p>
      </div>
    </div>
  );
}
