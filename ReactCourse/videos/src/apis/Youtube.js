import axios from 'axios';

const KEY = 'AIzaSyDTtgxpxsy6Y-ld2shVMFAwCfC-gwmjsyQ';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxresults: 5,
        key: KEY
    }
});



