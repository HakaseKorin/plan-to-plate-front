import http from './httpService'
import config from '../config.json'

const recipeEndPoint = `${config.apiUrl}/recipes`

export function getRecipes() {
    return http.get(recipeEndPoint)
}