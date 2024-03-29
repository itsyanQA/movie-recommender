import styles from "./MoviePage.module.scss";
import { useLocation } from "react-router-dom";
import { CircularLoading } from "../../components/UI/CircularLoading/CircularLoading";
import { ErrorMessage } from "../../styled/ErrorMessage";
import { FETCH_ERROR_TEXT } from "../../constants/Text";
import { useFetchMovie } from "../../hooks/useFetchMovie";
import MovieMetaInfo from "../../components/Movie/MovieMetaInfo/MovieMetaInfo";
import MovieImageContainer from "../../components/Movie/MovieImageContainer/MovieImageContainer";
import MovieCast from "../../components/Movie/MovieCast/MovieCast";
import MovieAdditionalInfo from "../../components/Movie/MovieAdditionalInfo/MovieAdditionalInfo";
import MovieAwards from "../../components/Movie/MovieAwards/MovieAwards";

export function MoviePage() {
  const location = useLocation();
  const movieId: string | undefined = location.pathname.split("/").at(-1);
  const { movie, cast, awards, revenue, isLoading, isError, isFetching } = useFetchMovie(movieId as string);
  if (isLoading || isFetching) {
    return <CircularLoading />;
  } else if (isError) {
    return <ErrorMessage>{FETCH_ERROR_TEXT}</ErrorMessage>;
  }

  return (
    <main className={styles.movie}>
      <section className={styles.movieInfo}>
        <MovieImageContainer movie={movie} />
        <div className={styles.movieInfoContent}>
          <h2 className={styles.movieInfoContentTitle}>{movie?.originalTitleText?.text}</h2>
          <MovieMetaInfo movie={movie} />
          <p className={styles.movieInfoContentSummary}>{movie?.plot?.plotText?.plainText}</p>
        </div>
      </section>
      <MovieCast cast={cast} />
      <MovieAdditionalInfo revenue={revenue} />
      <MovieAwards awards={awards} />
    </main>
  );
}
