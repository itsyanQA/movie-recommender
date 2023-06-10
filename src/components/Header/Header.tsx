import { SearchBar } from "../SearchBar/SearchBar";
import styles from "./Header.module.scss";
import LocalMoviesOutlinedIcon from "@mui/icons-material/LocalMoviesOutlined";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContainerHeadingWrapper}>
        <h1>Movie Recommender</h1>
        <LocalMoviesOutlinedIcon fontSize="large" sx={{ color: "#daa520" }} />
      </div>
      <nav>
        <ul>
          <li className={styles.headerContainerNavItem}>Geners</li>
          <li className={styles.headerContainerNavItem}>Actors</li>
          <SearchBar />
        </ul>
      </nav>
    </header>
  );
}
