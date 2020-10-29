import axios from 'axios';


const api = axios.create({

baseURL: 'https://opentdb.com/api.php?amount=10&category=14&difficulty=easy'

});

export default api;