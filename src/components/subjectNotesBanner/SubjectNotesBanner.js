import React from "react";
import "./style.scss";

import dayjs from "dayjs";

const SubjectNotesBanner = ({
  date,
  time,
  chapter,
  description,
  user,
  updatedBy,
}) => {
  return (
    <div className="item">
      <div className="chapter">{chapter}</div>
      <div className="info">
        <div>DATE: {dayjs(date).format("MMM D, YYYY")}</div>

        <div>TIME: {time}</div>
      </div>
      <hr className="line" />
      <div className="description">{description}</div>
      <div className="updatedBy">{updatedBy}.</div>
    </div>
  );
};

export default SubjectNotesBanner;
