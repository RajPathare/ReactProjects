import axios from 'axios';

// axios.create is used if we want to create a default axios request and re-configure some parameters
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 5719c439aa0f712704037db3464c99831bb6bdffea42febc7470e3f52457cf93'
    },
});