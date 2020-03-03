import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID QzvmcixdsGfqYXVH4RIADQGcEpTeMBVfKVE-_vpCuY0'
    }
});