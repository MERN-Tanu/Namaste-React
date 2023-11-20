import { LOGO_URL } from "../../utils/constants";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>

      <div className="nav-items">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#" h>
              Cart
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
