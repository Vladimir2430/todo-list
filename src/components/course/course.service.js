import axios from 'axios'
const baseUrl = 'https://uladzimir-yeudakimovich.herokuapp.com/api/courses'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

export default { getAll }