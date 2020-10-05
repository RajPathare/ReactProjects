import React from 'react'
import youtube from '../apis/Youtube';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';


class App extends React.Component {

    state = {
        vids: [],
        selectedVideo: null
    }

    componentDidMount = () => {
        this.onTermSubmit('india')
    }

    onTermSubmit = async (term) => {
        // console.log(term)
        const resp = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        console.log(resp.data.items)
        this.setState({
             vids: resp.data.items,
             selectedVideo: resp.data.items[0]
        })
    }

    onVideoSelect = (video) => {
        // console.log('From App',video)
        this.setState({ selectedVideo: video })
    }

    render(){
        return (
            <div className="ui container">
                <SearchBar callWhenSubmitted={this.onTermSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.vids}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;