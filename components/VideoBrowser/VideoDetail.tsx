import React from 'react';
import {Ui_embed,Iframe,Ui_segment,Header} from './Style.video'


const VideoDetail = (props) =>{

    if (!props.video) {
        return <div>Loading ...</div>
    }

    const videosrc=`https://www.youtube.com/embed/${props.video.id.videoId}`;
    return (
    <Ui_embed>
        <div >
            <Iframe title = 'video player' src = {videosrc} />
        </div>
        <Ui_segment>
            <Header className="ui header">{props.video.snippet.title}</Header>
            <p>{props.video.snippet.description}</p>
        </Ui_segment>
    </Ui_embed>
        );
}
export default VideoDetail;
