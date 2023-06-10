import { Movie } from "../../models/movie.model";
import styles from "./Upcoming.module.scss";

type UpcomingProps = {
  upcomingMovies: Movie[];
};

export function Upcoming({ upcomingMovies }: UpcomingProps) {
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.sectionContainerLabel}>Upcoming Movies</div>
      <div className={styles.sectionContainerCard}>
        {upcomingMovies?.map((upcomingMovie) => {
          if (upcomingMovie?.primaryImage?.url) {
            return (
              <img
                className={styles.sectionContainerUpcomingMovieImage}
                src={upcomingMovie?.primaryImage?.url}
              />
            );
          }
        })}
      </div>
    </section>
  );
}
