import React from "react";
import VideoCard from "../components/VideoCard";
import "../css/recommendedVideos.css";
import channel from "../img/channel.jpeg";
import video from "../img/video.jpg";

function RecommendedVideos() {
  return (
    <div className="recommendedVideos">
      <h2>Recommended</h2>
      <div className="recommendedVideos__videos">
        <VideoCard
          image={video}
          title="Become a Genius"
          channel="Nels Channel"
          channelImage={channel}
          views="100"
          timestamp="2 days ago"
        />
        <VideoCard
          image={video}
          title="Become a Genius"
          channel="Nels Channel"
          channelImage={channel}
          views="100"
          timestamp="2 days ago"
        />
        <VideoCard
          image={video}
          title="Become a Genius"
          channel="Nels Channel"
          channelImage={channel}
          views="100"
          timestamp="2 days ago"
        />
        <VideoCard
          image={video}
          title="Become a Genius"
          channel="Nels Channel"
          channelImage={channel}
          views="100"
          timestamp="2 days ago"
        />
        <VideoCard
          image={video}
          title="Become a Genius"
          channel="Nels Channel"
          channelImage={channel}
          views="100"
          timestamp="2 days ago"
        />
        <VideoCard
          image={video}
          title="Become a Genius"
          channel="Nels Channel"
          channelImage={channel}
          views="100"
          timestamp="2 days ago"
        />
      </div>
    </div>
  );
}

export default RecommendedVideos;
