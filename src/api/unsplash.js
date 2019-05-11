import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 18ccb1e45752c0fde0bee7266e8f5dca5079fc77716c8313389ee584820e269f'
    }
});