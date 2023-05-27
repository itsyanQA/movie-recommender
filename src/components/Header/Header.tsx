import "./Header.scss";

const Header = () => {
  return (
    <header className="header-container">
      <h1>Movie Recommender</h1>
      <nav>
        <ul>
          <li className="header-container__nav-item">Geners</li>
          <li className="header-container__nav-item">Actors</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
