import React from 'react';
import {Iframe,Segment,Embed} from './Style_video';

const VideoDetail = (props) =>{

    if (!props.video) {
        return <div>Loading ...</div>
    }

    const videosrc=`https://www.youtube.com/embed/${props.video.id.videoId}`;
    return (
    <Embed>
        <div className="ui embed">
            <Iframe title = 'video player' src = {videosrc} />
        </div>
        <Segment>
            <h4 className="ui header">{props.video.snippet.title}</h4>
            <p>{props.video.snippet.description}</p>
        </Segment>
    </Embed>
        );
}
export default VideoDetail;
