import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions'

class StreamList extends React.Component {

    componentDidMount()
    {
        this.props.fetchStreams();
    }
    
    renderList(){
        console.log(this.props.streams);
        return this.props.streams.map((stream)=>{
            return (
                <div className="item" key={stream.id}>
                    <i className="large middle aligned icon camera"></i>
                    <div className="content">
                        {stream.title}
                        <div className="description">{stream.description}</div>
                    </div>
                </div>
            )
        })
    }

    render(){
        // console.log(this.props.streams);
        return (
            <div>
                <h2>Streams</h2>
                <div className="ui celled list">{this.renderList()}</div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { streams: Object.values(state.streams) }; // object.values takes a object and converts it into an array. We convert our obj into array for making it easier for us to map all stream so that we can use .map() function.
}

export default connect(mapStateToProps, { fetchStreams })(StreamList);