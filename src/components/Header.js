import LOGO_URL from "../utils/constants";

import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btn_name, setBtn_name] = useState("Login");
  const OnlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  console.log(loggedInUser);

  const cart = useSelector((store) => store.cart.items);
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg mb-2">
      <div className="logo-container">
        <img className="w-56" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            Online Status: {OnlineStatus ? "online" : "offline"}
          </li>
          <li>
            <Link to="/" style={{ textDecoration: "none", color: "Black" }}>
              Home
            </Link>
          </li>
          <li className="px-4">
            <Link
              to="/About"
              style={{ textDecoration: "none", color: "Black" }}
            >
              About Us
            </Link>
          </li>
          <li className="px-4">
            <Link
              to="/Contacts"
              style={{ textDecoration: "none", color: "Black" }}
            >
              Contact Us
            </Link>
          </li>
          <li className="px-4 font-bold text-xl">
            <Link to="/Cart">Cart - ({cart.length} items)</Link>
          </li>
          <li className="px-4">
            <Link
              to="/Grocery"
              style={{ textDecoration: "none", color: "Black" }}
            >
              Grocery
            </Link>
          </li>
          <button
            className="login"
            onClick={() => {
              btn_name === "Login"
                ? setBtn_name("Logout")
                : setBtn_name("Login");
            }}
          >
            {btn_name}
          </button>
          <li className="px-4 text-lg font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
