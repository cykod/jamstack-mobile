import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://nfts4eva.herokuapp.com',
});


export default instance;