import { RouterPaths } from "../../models/enums/RouterPaths";
import { SearchBar } from "../SearchBar/SearchBar";
import styles from "./Header.module.scss";
import LocalMoviesOutlinedIcon from "@mui/icons-material/LocalMoviesOutlined";
import { useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContainerHeadingWrapper} onClick={() => navigate(RouterPaths.HOME_PAGE)}>
        <h1>Movie Recommender</h1>
        <LocalMoviesOutlinedIcon fontSize="large" sx={{ color: "#daa520" }} />
      </div>
      <nav>
        <ul>
          <li className={styles.headerContainerNavItem}>Geners</li>
          <li className={styles.headerContainerNavItem}>Actors</li>
          <li
            className={styles.headerContainerNavItem}
            onClick={() => navigate(RouterPaths.UPCOMING)}
          >
            Upcoming
          </li>
          <SearchBar />
        </ul>
      </nav>
    </header>
  );
}
