import { Link } from "react-router-dom";
import "../App.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Home
      </Link>

      <Link className="navbar-brand" to="/new-player">
        New Player
      </Link>
    </nav>
  );
};

export default NavBar;
