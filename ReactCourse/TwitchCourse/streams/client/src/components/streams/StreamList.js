import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions'
import { Link } from 'react-router-dom'

// import Modal2 from '../Modal2';

class StreamList extends React.Component {

    // state = {
    //     loading: false,
    //     visible: false,
    //     streamName: ""
    // };

    componentDidMount()
    {
        this.props.fetchStreams();
    }

    // render edit/delete buttons logic
    renderAdmin(stream){
        if(stream.userId === this.props.currentUserId)
        {
            return (
                <div className="right floated content">
                    <Link to={`/streams/edit/${stream.id}`} className="ui button primary">EDIT</Link>
                    <Link to={`/streams/delete/${stream.id}`} className="ui button red">DELETE</Link>
                </div>
            )
        }
    }


    // showModal = (streamInfo) => {
    //     this.setState({
    //       visible: true,
    //       streamName: streamInfo.title
    //     });
    // };

    // handleOk = () => {
    //     this.setState({ loading: true });
    //     setTimeout(() => {
    //       this.setState({ loading: false, visible: false });
    //     }, 3000);
    //   };
    
    //   handleCancel = () => {
    //     this.setState({ visible: false });
    //   };
    
    renderList(){
        console.log(this.props.streams);
        return this.props.streams.map((stream)=>{
            return (
                <div className="item" key={stream.id}>
                    <i className="large middle aligned icon camera"></i>
                    <div className="content">
                        <Link to={`/streams/${stream.id}`} className="header">
                            {stream.title}
                        </Link>
                        {/* <button className="ui button primary" onClick={()=> this.showModal(stream)}>Here</button> */}
                        <div className="description">{stream.description}</div>
                    </div>
                    {this.renderAdmin(stream)} 
                </div>
            )
        })
    }

    renderCreate(){
        if(this.props.isSignedIn)
        {
            return (
                <div style={{ textAlign: "right"}}>
                    <Link to="/streams/new" className="ui button primary">Create Stream</Link>
                </div>
            )
        }
    }

    render(){
        console.log(this.props.streams);
        // const { visible, loading } = this.state;
        return (
            <div>
                <h2>Streams</h2>
                <div className="ui celled list">{this.renderList()}</div>
                {this.renderCreate()}
                {/* <Modal2 
                visible={visible}
                title={this.state.streamName}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                handleOk={this.handleOk}
                handleCancel={this.handleCancel}
                loading={loading}
                /> */}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn }; // object.values takes a object and converts it into an array. We convert our obj into array for making it easier for us to map all stream so that we can use .map() function.
}

export default connect(mapStateToProps, { fetchStreams })(StreamList);