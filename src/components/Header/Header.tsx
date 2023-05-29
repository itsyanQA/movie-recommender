import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={`${styles.headerContainer}`}>
      <h1>Movie Recommender</h1>
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
