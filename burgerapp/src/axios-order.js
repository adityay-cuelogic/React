import axios from 'axios';

const instance = axios.create({
    baseURL:"https://react-burger-app-d5c3c.firebaseio.com/"
});

export default instance;