import { LOGO } from "../util/constants";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-logo">
        <img alt="logo" height="100%" width="100%" src={LOGO} />
      </div>
      <ul className="header-nav-items">
        <li className="header-nav-item">Home</li>
        <li className="header-nav-item">About Us</li>
        <li className="header-nav-item">Contact Us</li>
        <li className="header-nav-item">Cart</li>
      </ul>
    </div>
  );
};

export default Header;
