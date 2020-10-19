import React, { useState,useEffect } from 'react'
import youtube from '../apis/Youtube';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';


const App = () => {
    const [videos,setVideos] = useState([]);
    const [selectedVideo,setSelectedVideo] = useState(null);

    useEffect(()=>{
        onTermSubmit('india')
    },[]);

    const onTermSubmit = async (term) => {
        // console.log(term)
        const resp = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        console.log(resp.data.items)
        setVideos(resp.data.items);
        setSelectedVideo(resp.data.items[0]);
    }

    const onVideoSelect = (video) => {
        // console.log('From App',video)
        setSelectedVideo(video);
    }

    return (
        <div className="ui container">
            <SearchBar callWhenSubmitted={onTermSubmit} />
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={selectedVideo}/>
                    </div>
                    <div className="five wide column">
                        <VideoList onVideoSelect={onVideoSelect} videos={videos}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;