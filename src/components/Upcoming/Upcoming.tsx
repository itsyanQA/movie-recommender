import { Movie } from "../../models/movie.model";
import styles from "./Upcoming.module.scss";
import { CircularLoading } from "../UI/CircularLoading";
import { ErrorMessage } from "../../styled/ErrorMessage";
import { FETCH_ERROR_TEXT } from "../../constants/Text";

type UpcomingProps = {
  upcomingMovies: Movie[];
  isLoading: boolean;
  isError: boolean;
};

export function Upcoming({ upcomingMovies, isLoading, isError }: UpcomingProps) {
  if (isError) {
    return <ErrorMessage>{FETCH_ERROR_TEXT}</ErrorMessage>;
  }

  return isLoading ? (
    <CircularLoading />
  ) : (
    <section className={styles.sectionContainer}>
      <h2 className={styles.sectionContainerHeader}>Upcoming Movies</h2>
      <div className={styles.sectionContainerRow}>
        {upcomingMovies?.map((upcomingMovie: Movie, index: number) => {
          if (upcomingMovie?.primaryImage?.url) {
            return (
              <div className={styles.sectionContainerCard}>
                <img
                  key={index}
                  alt="movie cover"
                  className={styles.sectionContainerUpcomingMovieImage}
                  src={upcomingMovie?.primaryImage?.url}
                />
                <p className={styles.sectionContainerMovieTitle}>{upcomingMovie?.originalTitleText.text}</p>
              </div>
            );
          }
        })}
      </div>
    </section>
  );
}
