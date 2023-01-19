import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getRecipes } from '../services/recipeService';

class Recipes extends Component {

    state = {
        recipes: []
    } 

    render() { 
        return ( 
            <div>
                <h1>Recipes</h1>
                <Link className='btn btn-primary' to='new'>New Recipe</Link>

                {this.state.recipes.map(recipe => <div key={recipe._id}>{recipe.name}</div>)}
            </div>
        );
    }

    async componentDidMount() {
        const { data } = await getRecipes()
        const recipes = [...data]

        this.setState({ recipes })
    }
}
 
export default Recipes;