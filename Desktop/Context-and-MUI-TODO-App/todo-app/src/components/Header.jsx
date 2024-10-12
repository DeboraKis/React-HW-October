import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <h1>To Do List App</h1>
        <nav>
          <ul className="nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/list">List</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
