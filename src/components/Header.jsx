import { useEffect, useState } from "react";
import { LOGO } from "../util/constants";
import { Link } from "react-router";
import useOnlineStatus from "../util/useOnlineStatus";

const Header = () => {
  // console.log("rendering");
  const [buttonText, setButtonText] = useState("Login");
  const isOnline = useOnlineStatus();
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
    <div className="flex items-center justify-between p-2 bg-gray-100 shadow-lg">
      <div className="w-15">
        <img alt="logo" height="100%" width="100%" src={LOGO} />
      </div>
      <ul className="flex gap-2 items-center">
        <li className="">
          Online Status : {isOnline ? "🟢 Online" : "🔴 Offline"}
        </li>
        <li className=" hover:text-blue-700">
          <Link to="/">Home</Link>
        </li>
        <li className=" hover:text-blue-700">
          <Link to="/about"> About Us</Link>
        </li>
        <li className=" hover:text-blue-700">
          <Link to="/contact">Contact Us</Link>
        </li>
        <li className=" hover:text-blue-700">
          <Link to="/grocery">Instamart</Link>
        </li>
        <li className=" hover:text-blue-700">Cart</li>
        <li className=" hover:text-blue-700">
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
