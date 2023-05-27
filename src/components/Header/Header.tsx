import "./Header.scss";

const Header = () => {
  return (
    <header className="header-container">
      <h1>Movie Recommender</h1>
      <nav>
        <ul>
          <li>Geners</li>
          <li>Actors</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
