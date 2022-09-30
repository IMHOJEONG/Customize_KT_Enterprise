import React from "react";
import "./Video.scss";

export const Video = () => {
  return (
    <>
      <div className="video-container">
        <p className="title">
          체크인부터 체크아웃까지, <br /> AI 호텔이 함께 합니다.
        </p>
        <div className="content">
          <iframe
            src="https://www.youtube.com/embed/Y3VxdJrnYGE"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </>
  );
};
