import { Link } from 'react-router-dom'

export function Recipes() {
    return <div>
        <h1>Recipes</h1>
        <Link className='btn btn-primary' to='new'>New Recipe</Link>
    </div>
}