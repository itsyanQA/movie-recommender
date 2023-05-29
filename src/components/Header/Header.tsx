import styles from "./Header.module.scss";
import LocalMoviesOutlinedIcon from "@mui/icons-material/LocalMoviesOutlined";
const Header = () => {
  return (
    <header className={`${styles.headerContainer}`}>
      <div className={`${styles.headerContainerHeadingWrapper}`}>
        <h1>Movie Recommender</h1>
        <LocalMoviesOutlinedIcon fontSize="large" sx={{ color: "#daa520" }} />
      </div>
      <nav>
        <ul>
          <li className={`${styles.headerContainerNavItem}`}>Geners</li>
          <li className={`${styles.headerContainerNavItem}`}>Actors</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
