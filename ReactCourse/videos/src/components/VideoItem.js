import React from 'react';
import './VideoItem.css'

const VideoItem = (props) => {
    //props -> video , onVideoSelect
    return <div onClick={() => props.onVideoSelect(props.video)} className="video-item item">
        <img className="ui image" src={props.video.snippet.thumbnails.medium.url} alt={props.video.snippet.title} />
        <div className="content">
            <div className="header" style={{ color:"white"}}>{props.video.snippet.title}</div>
        </div>
    </div>
}

export default VideoItem;