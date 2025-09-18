import { useEffect, useState } from "react";
import { LOGO } from "../util/constants";
import { Link } from "react-router";

const Header = () => {
  // console.log("rendering");
  const [buttonText, setButtonText] = useState("Login");
  const handleButtonClick = () => {
    if (buttonText === "Login") {
      setButtonText("Logout");
    } else {
      setButtonText("Login");
    }
  };
  useEffect(() => {
    // console.log("useEffect Run");
  }, [buttonText]);
  return (
    <div className="header-container">
      <div className="header-logo">
        <img alt="logo" height="100%" width="100%" src={LOGO} />
      </div>
      <ul className="header-nav-items">
        <li className="header-nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="header-nav-item">
          <Link to="/about"> About Us</Link>
        </li>
        <li className="header-nav-item">
          <Link to="/contact">Contact Us</Link>
        </li>
        <li className="header-nav-item">Cart</li>
        <li>
          <button
            onClick={handleButtonClick}
            style={{ padding: "1rem", cursor: "pointer" }}
          >
            {buttonText}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Header;
