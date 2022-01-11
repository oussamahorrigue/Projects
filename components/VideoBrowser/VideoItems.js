import React from "react";
import {Image,Items,Content} from './style-video-content';

const VideoItems=(props)=>{

    return (
        <Items onClick = {()=>{props.onVideoSelect(props.video)}}className="video-item item">
            <Image alt={props.video.snippet.title} src = {props.video.snippet.thumbnails.medium.url}/>
            <Content className="content">
                <p>{props.video.snippet.title}</p>
            </Content>
        </Items>
    );
}
export default VideoItems;

