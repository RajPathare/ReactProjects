import { combineReducers } from 'redux';


const songsReducer = () => {
    return [
        { title: 'No Scrubs', duration: '4:05'},
        { title: 'Mac', duration: '2:30'},
        { title: 'All stars', duration: '3:40'}
    ]
};

const selectedSongReducer = (selectedSong=null, action) => {
    if(action.type === 'SONG_SELECTED')
    {
        return action.payload;
    }

    return selectedSong;
};


// the keys that we declare here(songs,selectedSong) are our main state keys in the redux store
export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})

