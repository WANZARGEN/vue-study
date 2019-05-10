import axios from 'axios'

const userApi = (config) => (
  axios.create({
    ...config,
    baseURL: `http://localhost:3000/api/`,
    withCredentials: false,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
  })
)

export default {
  list: userApi({url: '/user/list', method: 'get'})
}