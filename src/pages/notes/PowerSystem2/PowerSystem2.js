import React, { useContext, useEffect, useState } from "react";
import Loader from "../../../components/loader/Loader.js";
import { Context } from "../../../index";
import SubjectNotesBanner from "../../../components/subjectNotesBanner/SubjectNotesBanner.js";
import axios from "axios";

const PowerSystem2 = () => {
  const [notes, setNotes] = useState([]);
  const { loading, setLoading } = useContext(Context);

  const getNotes = async () => {
    setLoading(true);
    const { data } = await axios.get(
      "https://nodejs-classnotes.onrender.com/api/notes/ps2",
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    return data;
  };

  useEffect(() => {
    getNotes()
      .then((data) => setNotes(data?.notes))
      .then(() => setLoading(false))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      {!loading ? (
        notes &&
        notes
          .sort((a, b) => (a.date > b.date ? 1 : -1))
          .map((item, index) => (
            <SubjectNotesBanner
              key={index}
              date={new Date(`${item.date}`).toLocaleDateString()}
              time={item.time}
              chapter={item.chapter}
              user={item.user}
              description={item.description}
              updatedBy={item.updatedBy ? item.updatedBy : ""}
            />
          ))
      ) : (
        <div className="loadingSkeleton">
          <Loader />
          <Loader />
          <Loader />
          <Loader />
        </div>
      )}
    </>
  );
};

export default PowerSystem2;
