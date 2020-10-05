import React from 'react';
import { connect } from 'react-redux';


const SongDetails = (props) => {
    // console.log(props)
    if(!props.mySelectedSong)
    {
        return <div>Please select something!</div>
    }

    return (
        <div>
            <h3>Details:</h3>
            <p>
                Title: {props.mySelectedSong.title}
                <br/>
                Duration: {props.mySelectedSong.duration}
            </p>
        </div>
    )
}


const mapStateToProps = (state) => {
    console.log(state)
    return { mySelectedSong: state.selectedSong}
}

export default connect(mapStateToProps)(SongDetails);