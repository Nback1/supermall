import axios from 'axios'

export function request(config) {

  const instance = axios.create({
    baseUrl: 'http://123.207.32.32:8000'
  })
}
