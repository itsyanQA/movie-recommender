import { Movie } from "../../models/movie.model";
import styles from "./MovieCatalog.module.scss";
import { CircularLoading } from "../UI/CircularLoading/CircularLoading";
import { ErrorMessage } from "../../styled/ErrorMessage";
import { FETCH_ERROR_TEXT } from "../../constants/Text";
import { Pagination } from "../UI/Pagination/Pagination";

type MovieCatalogProps = {
  movies: Movie[];
  isLoading: boolean;
  isError: boolean;
  catalogHeaderText: string;
};

export function MovieCatalog(props: MovieCatalogProps) {
  const { movies, isLoading, isError, catalogHeaderText } = props;

  if (isError) {
    return <ErrorMessage>{FETCH_ERROR_TEXT}</ErrorMessage>;
  }

  return isLoading ? (
    <CircularLoading />
  ) : (
    <>
      <section className={styles.sectionContainer}>
        <h2 className={styles.sectionContainerHeader}>{catalogHeaderText}</h2>
        <div className={styles.sectionContainerRow}>
          {movies?.map((movie: Movie, index: number) => {
            if (movie?.primaryImage?.url) {
              return (
                <div className={styles.sectionContainerCard} key={index}>
                  <img
                    alt={movie?.primaryImage?.caption?.plainText}
                    className={styles.sectionContainerUpcomingMovieImage}
                    src={movie?.primaryImage?.url}
                  />
                  <p className={styles.sectionContainerMovieTitle}>
                    {movie?.originalTitleText.text}
                  </p>
                  <p className={styles.sectionContainerMovieDate}>
                    {`${movie?.releaseDate?.day}/${movie?.releaseDate?.month}/${movie?.releaseDate?.year}`}
                  </p>
                </div>
              );
            }
          })}
        </div>
      </section>
      <Pagination />
    </>
  );
}
