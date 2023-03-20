import axios from 'axios'

const url = "http://localhost:3001/persons"

const getAll = () => {
    return axios.get(url)
        .then(response => response.data)
}

const addNumber = (newPerson) => {
    return axios.post(url, newPerson)
        .then(response => response.data)
}

export default { getAll, addNumber }
