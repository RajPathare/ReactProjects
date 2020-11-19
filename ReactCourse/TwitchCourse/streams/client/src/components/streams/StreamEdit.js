import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component {

    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id);
    }


    onSubmit = (formValues) => {
        // console.log(formValues);
                            // id to be edited, changed form values which we are getting in our formValues variable (from the StreamForm component)
        this.props.editStream(this.props.match.params.id, formValues );
    }


    // console.log(props); 
    // console.log(this.props.stream);
    // route params (/streams/edit/3) (3) can be accessed through props.

    render(){
        // console.log(this.props);
        console.log(this.props.stream);
        if(!this.props.stream)
        {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <h3>Edit a Stream</h3>
                {/* initialValues is used if we want to pass on some default values to other component, in our case the edit component */}
                {/* make sure you pass the correct key (title,description) as it will replace the name passed to Field component */}
                {/* you can also use .pick(obj, 'title','description') from the lodash library here for fetching only the required key,val pair from our object */}
                <StreamForm initialValues={{"title": this.props.stream.title , "description": this.props.stream.description }} onSubmit={this.onSubmit}/>
            </div>
        )
    }
}

// ownProps = for accessing other props which are present inside this component
const mapStateToProps = (state, ownProps) => {
    // streams obj -> {1: {id,title,desc}, 2: {id,title,desc}}
    // we need to fetch a specific id here so ->
    return { stream: state.streams[ownProps.match.params.id] };
}

export default connect(mapStateToProps,{
    fetchStream,
    editStream
})(StreamEdit);