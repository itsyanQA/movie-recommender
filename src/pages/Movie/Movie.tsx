import styles from "./Movie.module.scss";
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
  console.log(movie);

  if (isLoading || isFetching) {
    return <CircularLoading />;
  } else if (isError) {
    return <ErrorMessage>{FETCH_ERROR_TEXT}</ErrorMessage>;
  }

  return (
    <div className={styles.movieInfo}>
      {movie?.primaryImage?.url ? (
        <img className={styles.movieInfoImage} src={movie?.primaryImage?.url} />
      ) : (
        <div className={styles.movieInfoImage} >
          <PlaceholderCard dimension={{ height: "345px", width: "230px" }} />
        </div>
      )}
      <div className={styles.movieInfoContent}>
        <div className={styles.movieInfoContentTop}>
          <span className={styles.movieInfoContentTopTitle}>{movie?.originalTitleText?.text}</span>
          <span
            className={styles.movieInfoContentTopDate}
          >{`${movie?.releaseDate?.day}/${movie?.releaseDate?.month}/${movie?.releaseDate?.year}`}</span>
          <span className={styles.movieInfoContentTopDirectedby}></span>
        </div>
        <p className={styles.movieInfoContentSummary}></p>
      </div>
    </div>
  );
}
