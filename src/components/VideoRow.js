import React from "react";
import "../css/videoRow.css";

function VideoRow({
  views,
  subs,
  description,
  timeStamp,
  channel,
  title,
  image,
}) {
  return (
    <div className="videoRow">
      <img src={image} alt="" />
      <div className="videoRow__text">
        <h3>{title}</h3>
        <p className="videoRow__headLine">
          {channel} * <span className="videoRow__subsNumber">{subs}</span>{" "}
          Subscribers {views} views * {timeStamp}
        </p>
        <p className="videoRow__description">{description}</p>
      </div>
    </div>
  );
}

export default VideoRow;
