import axios from 'axios'

export default class TriviaService {
    constructor() {
        axios.defaults.baseURL = 'http://jservice.io/api/'
    }

    getAll() {
        return axios.get('/random/',{
            params:{count:30}
        })
    }
}

export const triviaService = new TriviaService()