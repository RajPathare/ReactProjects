import React from 'react';
import VideoItem from './VideoItem';


const VideoList = (props) => {
    // props.videos , props.onVideoSelect

    const renderedList = props.videos.map((videovar) => {
        return <VideoItem key={videovar} onVideoSelect={props.onVideoSelect} video={videovar}/>
    })

    return <div className="ui relaxed divided list">{renderedList}</div>
}


export default VideoList;