import React from "react";
import { Image, Items, Content } from "./style-video-content";
import { motion } from "framer-motion";

const VideoItems = (props) => {
  return (
    <Items
      onClick={() => {
        props.onVideoSelect(props.video);
      }}
      className="video-item item"
    >
      <motion.img
        alt={props.video.snippet.title}
        src={props.video.snippet.thumbnails.medium.url}
        style={{ cursor: "pointer" }}
        whileHover={{
          position: "relative",
          zIndex: 1,
          background: "white",
          scale: 1.2,
          transition: {
            duration: 0.2,
          },
        }}
      />
      <Content className="content">
        <p>{props.video.snippet.title}</p>
      </Content>
    </Items>
  );
};
export default VideoItems;
