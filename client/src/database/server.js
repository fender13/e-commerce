import axios from 'axios'

var axi = axios.create({
    baseURL: 'http://localhost:8081',
})

export default axi