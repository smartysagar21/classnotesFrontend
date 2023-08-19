import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaPenToSquare } from "react-icons/fa6";

import "./style.scss";
import { Context } from "../..";
import axios from "axios";
import { toast } from "react-hot-toast";

const Header = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const logoutHandler = async () => {
    try {
      await axios.get(
        "https://nodejs-classnotes.onrender.com/api/users/logout",
        {
          withCredentials: true,
        }
      );

      toast.success("Logged Out Successfully");
      setIsAuthenticated(false);
    } catch (err) {
      console.log(err);
      toast.error("Something Went Wrong");
      setIsAuthenticated(true);
    }
  };

  const navigate = useNavigate();
  return (
    <div className="nav">
      <FaPenToSquare className="pen" onClick={() => navigate("/")} />

      <span className="logo" onClick={() => navigate("/")}>
        ClassNotes.
      </span>
      <ul className="menuItems">
        <li
          className="navItem"
          onClick={() => {
            navigate("/notes");
          }}
        >
          Notes
        </li>
        <li
          className="navItem"
          onClick={() => {
            navigate("/update");
          }}
        >
          Update
        </li>
        {isAuthenticated ? (
          <li className="navItem" onClick={logoutHandler}>
            Logout
          </li>
        ) : (
          <li
            className="navItem"
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </li>
        )}
      </ul>
    </div>
  );
};

export default Header;
