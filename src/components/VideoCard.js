import React from "react";
import "../css/videoCard.css";
import Avatar from "@material-ui/core/Avatar";

function VideoCard({ image, title, channel, channelImage, views, timestamp }) {
  return (
    <div className="videoCard">
      <img className="videoCard__thumbNail" src={image} alt={image} />

      <div className="videoCard__info">
        <Avatar
          className="videoCard__info-avatar"
          alt={channel}
          src={channelImage}
        />
        <div className="videoCard__info-text">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views} Views • {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
