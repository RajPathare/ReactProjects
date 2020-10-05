import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';


class SongList extends React.Component {


    renderList()
        {
            return this.props.songs.map((song) => {
                return (
                    <div className="item" key={song.title}>
                        <div className="right floated content">
                            <button className="ui button primary" onClick={()=> this.props.selectSong(song)}>
                                Select
                            </button>
                        </div>
                        <div className="content">{song.title}</div>
                    </div>
                );
            });
        }

    render() {
        // console.log(this.props.songs)
        return <div className="ui divided list">{this.renderList()}</div>
    }
}


// by convention we name this function mapStateToProps
// this function is called everytime we click on a button (everytime we select a song)
const mapStateToProps = (state) =>{
    console.log(state)
    return { songs: state.songs } // so we can use this.props.songs above to render a list of songs using map
}


// connect -> component can use the states which are stored in our main external redux store
// so, we write -> export default connect()(SongList) where SongList is our component
export default connect(mapStateToProps, {
    selectSong: selectSong   // second parameter -> actions
})(SongList);  // component

// original -> export default SongList; after redux -> connect
