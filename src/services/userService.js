import http from './httpService'
import { apiUrl } from '../config.json'

const userEndPoint = `${apiUrl}/users`

export function registerUser(user) {
    return http.post(userEndPoint, user)
}

export function getSelf() {
    return http.get(`${userEndPoint}/me`)
}