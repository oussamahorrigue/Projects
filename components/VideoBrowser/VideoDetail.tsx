import React from 'react';
import {UI_embed,Header} from './style-video-content';

const VideoDetail = (props) =>{

    if (!props.video) {
        return <div>Loading ...</div>
    }

    const videosrc=`https://www.youtube.com/embed/${props.video.id.videoId}`;
    return (
    <UI_embed>
        <div >
            <iframe title = 'video player' src = {videosrc} />
        </div>
        <Header>
            <h4 className="ui header">{props.video.snippet.title}</h4>
            <p>{props.video.snippet.description}</p>
        </Header>
    </UI_embed>
        );
}
export default VideoDetail;
