import { Movie } from "../../../models/interfaces/movie-base-interfaces";
import styles from "./MovieCatalog.module.scss";
import { CircularLoading } from "../../UI/CircularLoading/CircularLoading";
import { ErrorMessage } from "../../../styled/ErrorMessage";
import { FETCH_ERROR_TEXT, MOVIES_NOT_FOUND } from "../../../constants/Text";
import { Pagination } from "../../UI/Pagination/Pagination";
import { useNavigate } from "react-router-dom";
import { PlaceholderCard } from "../../UI/PlaceholderCard/PlaceholderCard";
import MovieCatalogCarousel from "../MovieCatalogCarousel/MovieCatalogCarousel";

type MovieCatalogProps = {
  movies: Movie[];
  isLoading: boolean;
  isError: boolean;
  isFetching: boolean;
  catalogHeaderText: string;
  shouldShowPagination?: boolean;
  page?: number | undefined;
  setPage?: React.Dispatch<React.SetStateAction<number>> | undefined;
};

export function MovieCatalog(props: MovieCatalogProps) {
  const {
    movies,
    isLoading,
    isError,
    catalogHeaderText,
    isFetching,
    page,
    setPage,
    shouldShowPagination = true,
  } = props;
  const navigate = useNavigate();

  const onMovieClickHandler = (movieId: string): void => {
    navigate(`movie/${movieId}`);
  };

  const getMovieImage = (
    movieCaption: string | undefined,
    movieImageUrl: string | null,
    movieId: string
  ): JSX.Element => {
    if (movieImageUrl) {
      return (
        <img
          alt={movieCaption}
          className={styles.sectionContainerMovieImage}
          src={movieImageUrl}
          onClick={() => onMovieClickHandler(movieId)}
          loading="lazy"
        />
      );
    }
    return (
      <div
        onClick={() => onMovieClickHandler(movieId)}
        className={`${styles.sectionContainerMovieImage} ${styles.sectionContainerPlaceholderImage}`}
      >
        <PlaceholderCard />
      </div>
    );
  };

  const getMoviesElements = (): JSX.Element[] => {
    return movies?.map((movie: Movie, index: number) => {
      return (
        <li className={styles.sectionContainerCard} key={index}>
          {getMovieImage(movie?.primaryImage?.caption?.plainText, movie?.primaryImage?.url, movie?.id)}
          <p onClick={() => onMovieClickHandler(movie?.id)} className={styles.sectionContainerMovieTitle}>
            {movie?.originalTitleText.text}
          </p>
          <p className={styles.sectionContainerMovieDate}>
            {`${movie?.releaseDate?.day}/${movie?.releaseDate?.month}/${movie?.releaseDate?.year}`}
          </p>
        </li>
      );
    });
  };

  if (isError) {
    return <ErrorMessage>{FETCH_ERROR_TEXT}</ErrorMessage>;
  } else if (movies?.length === 0) {
    return (
      <>
        <ErrorMessage>{MOVIES_NOT_FOUND}</ErrorMessage>
        {shouldShowPagination && <Pagination movieData={movies} page={page} setPage={setPage} />}
      </>
    );
  }

  return isLoading || isFetching ? (
    <CircularLoading />
  ) : (
    <>
      <section className={styles.sectionContainer}>
        <h2 className={styles.sectionContainerHeader}>{catalogHeaderText}</h2>
        {shouldShowPagination ? (
          <ul
            className={`${styles.sectionContainerRow} ${
              !shouldShowPagination && styles.sectionContainerHorizontalCatalog
            }`}
          >
            {getMoviesElements()}
          </ul>
        ) : (
          <MovieCatalogCarousel>{getMoviesElements()}</MovieCatalogCarousel>
        )}
      </section>
      {shouldShowPagination && <Pagination movieData={movies} page={page} setPage={setPage} />}
    </>
  );
}
