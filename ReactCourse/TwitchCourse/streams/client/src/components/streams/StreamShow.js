import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions'
import flv from 'flv.js';

class StreamShow extends React.Component {

    constructor(props)
    {
        super(props);
        this.videoRef = React.createRef();
    }

    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id);
        this.buildPlayer();
    }

    // we need to anayway build the player even if our component re-renders. So we add it in the update lifecycle
    // this will help us in the case if the players gets built before the stream is fetched. (componentDidMount runs only once)
    componentDidUpdate(){
        this.buildPlayer();
    }

    componentWillUnmount(){
        this.player.destroy();
    }

    buildPlayer(){

        // if player object gets created but we haven't fetched the stream yet
        if(this.player || !this.props.stream)
        {
            return;
        }

        this.player = flv.createPlayer({
            type: 'flv',
            url: `http://localhost:8000/live/${this.props.match.params.id}.flv`
        });
        this.player.attachMediaElement(this.videoRef.current);
        this.player.load();
    }

    render()
    {
        if(!this.props.stream)
        {
            return <div>Loading...</div>
        }

        return (
            <div>
                {/* we are creating a reference to the actual video component inside the DOM */}
                <video ref={this.videoRef} style={{ "width": "100%" }} controls={true} ></video>
                <h1>{this.props.stream.title}</h1>
                <h5>{this.props.stream.description}</h5>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps,{
    fetchStream
})(StreamShow);