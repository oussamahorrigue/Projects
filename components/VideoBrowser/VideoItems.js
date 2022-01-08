import React from "react";
import {Ui_image,ImageItems} from './Style_video';

const VideoItems=(props)=>{

    return (
        <ImageItems onClick = {()=>{props.onVideoSelect(props.video)}}className="video-item item">
            <Ui_image alt={props.video.snippet.title} src = {props.video.snippet.thumbnails.medium.url}/>
            <div className="content">
                <p>{props.video.snippet.title}</p>
            </div>
        </ImageItems>
    );
}
export default VideoItems;

