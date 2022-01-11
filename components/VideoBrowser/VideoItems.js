import React from "react";


const VideoItems=(props)=>{

    return (
        <div onClick = {()=>{props.onVideoSelect(props.video)}}className="video-item item">
            <img alt={props.video.snippet.title} src = {props.video.snippet.thumbnails.medium.url}/>
            <div className="content">
                <p>{props.video.snippet.title}</p>
            </div>
        </div>
    );
}
export default VideoItems;

