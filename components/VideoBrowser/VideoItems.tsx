import React from "react";
import {Video_item,Ui_image} from './Style.video'


const VideoItems=(props)=>{

    return (
        <Video_item onClick = {()=>{props.onVideoSelect(props.video)}} >
            <Ui_image className="ui image" alt={props.video.snippet.title} src = {props.video.snippet.thumbnails.medium.url}/>
            <div className="content">
                <div className= "header">{props.video.snippet.title}</div>
            </div>
        </Video_item>
    );
}
export default VideoItems;

