import { Movie } from "../../models/movie.model";
import styles from "./MovieCatalog.module.scss";
import { CircularLoading } from "../UI/CircularLoading/CircularLoading";
import { ErrorMessage } from "../../styled/ErrorMessage";
import { FETCH_ERROR_TEXT, MOVIES_NOT_FOUND } from "../../constants/Text";
import { Pagination } from "../UI/Pagination/Pagination";
import LocalMoviesOutlinedIcon from "@mui/icons-material/LocalMoviesOutlined";

type MovieCatalogProps = {
  movies: Movie[];
  isLoading: boolean;
  isError: boolean;
  isFetching: boolean;
  catalogHeaderText: string;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

export function MovieCatalog(props: MovieCatalogProps) {
  const { movies, isLoading, isError, catalogHeaderText, isFetching, page, setPage } = props;

  const getMovieImage = (
    movieCaption: string | undefined,
    movieImageUrl: string | null
  ): JSX.Element => {
    if (movieImageUrl) {
      return (
        <img alt={movieCaption} className={styles.sectionContainerMovieImage} src={movieImageUrl} />
      );
    }
    return (
      <div
        className={`${styles.sectionContainerMovieImage} ${styles.sectionContainerPlaceholderImage}`}
      >
        <LocalMoviesOutlinedIcon className={styles.sectionContainerPlaceholderIcon} />
      </div>
    );
  };

  if (isError) {
    return <ErrorMessage>{FETCH_ERROR_TEXT}</ErrorMessage>;
  } else if (movies?.length === 0) {
    return (
      <>
        <ErrorMessage>{MOVIES_NOT_FOUND}</ErrorMessage>
        <Pagination movieData={movies} page={page} setPage={setPage} />
      </>
    );
  }

  return isLoading || isFetching ? (
    <CircularLoading />
  ) : (
    <>
      <section className={styles.sectionContainer}>
        <h2 className={styles.sectionContainerHeader}>{catalogHeaderText}</h2>
        <div className={styles.sectionContainerRow}>
          {movies?.map((movie: Movie, index: number) => {
            return (
              <div className={styles.sectionContainerCard} key={index}>
                {getMovieImage(movie?.primaryImage?.caption?.plainText, movie?.primaryImage?.url)}
                <p className={styles.sectionContainerMovieTitle}>{movie?.originalTitleText.text}</p>
                <p className={styles.sectionContainerMovieDate}>
                  {`${movie?.releaseDate?.day}/${movie?.releaseDate?.month}/${movie?.releaseDate?.year}`}
                </p>
              </div>
            );
          })}
        </div>
      </section>
      <Pagination movieData={movies} page={page} setPage={setPage} />
    </>
  );
}
