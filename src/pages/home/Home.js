import React from "react";

import "./style.scss";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home">
      <img
        className="img"
        src="https://images.pexels.com/photos/7516544/pexels-photo-7516544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="contains img"
      />
      <div className="heading">Welcome to ClassNotes.</div>
      <div className="bodyDesc">
        Missed your classes due to some reasons?
        <br /> Don't worry. Visit the notes section and update your notes. If
        you have attended the class, then you may update notes in update section
        and get your name embedded below the notes. Give and take is fair play.
      </div>
      <div className="homebtn">
        <button
          className="btnnotes"
          onClick={() => {
            navigate("/notes");
          }}
        >
          NOTES SECTION
        </button>{" "}
        <button
          className="btnupdate"
          onClick={() => {
            navigate("/update");
          }}
        >
          UPDATE SECTION
        </button>
      </div>
    </div>
  );
};

export default Home;
