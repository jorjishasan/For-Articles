import "../styles/Header.scss";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav>
      <img src="https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_directions_bike_48px-512.png" />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          {" "}
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
