import { SearchBar } from "../SearchBar/SearchBar";
import styles from "./Header.module.scss";
import LocalMoviesOutlinedIcon from "@mui/icons-material/LocalMoviesOutlined";
import { useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContainerHeadingWrapper} onClick={() => navigate("/")}>
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
