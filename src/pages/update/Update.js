import React, { useContext, useEffect, useState } from "react";

import "./style.scss";
import { Context } from "../..";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from "axios";

const Update = () => {
  const Navigate = useNavigate();
  const [subject, setSubject] = useState("Electrical Machines - II");
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [chapter, setChapter] = useState();
  const [description, setDescription] = useState();

  const totalSubject = [
    "Electrical Machines - II",
    "Power System - II",
    "Adavanced Control System",
    "Advanced Power Electronics",
    "Renewable Energy Resources and Convertors",
    "Artificial Intelligence",
    "Power Generation and Economics",
  ];

  const { isAuthenticated, loading, setLoading } = useContext(Context);

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data } = await axios.post(
        "https://nodejs-classnotes.onrender.com/api/notes/update",
        {
          subject,
          date,
          time,
          chapter,
          description,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      toast.success(data.message);
      setLoading(false);
      Navigate("/notes");
    } catch (err) {
      console.log(err);
      toast.error("Something Went Wrong");
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!isAuthenticated) {
      toast.error("Login First");
      Navigate("/");
    }
  });

  return (
    <div className="update">
      <div className="formBody">
        <form onSubmit={submitHandler}>
          <div className="title">UPDATE NOTES</div>
          <div className="formContainer">
            <div className="formControl">
              <label className="subject">Subject</label>
              <select
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              >
                {totalSubject.map((item, index) => (
                  <option key={index}>{item}</option>
                ))}
              </select>
            </div>
            <div className="formControl">
              <label className="chapter">Chapter</label>
              <input
                placeholder="Which Chapter was Taught"
                required
                type="text"
                value={chapter}
                onChange={(e) => setChapter(e.target.value)}
              />
            </div>
            <div className="formControl">
              <label className="date">Date</label>
              <input
                required
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="formControl">
              <label className="time">Time</label>
              <input
                required
                placeholder="Scheduled Time of Class"
                type="text"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>

            <div className="textAreaControl">
              <label>Description</label>
              <textarea
                cols="50"
                rows="4"
                placeholder="Tell us in brief what was taught in the class..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
          </div>
          <div className="btn">
            <button disabled={loading} type="submit">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
