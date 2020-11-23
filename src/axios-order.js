import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://burger-buddy-f1dd5.firebaseio.com/',
});

export default instance;
