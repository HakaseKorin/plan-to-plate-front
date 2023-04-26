import http from './httpService'
import config from '../config.json'

const loginEndPoint = `${config.apiUrl}/login`

export function login(payload) {
    return http.post(loginEndPoint, payload)
}