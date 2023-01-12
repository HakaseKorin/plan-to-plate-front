import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { NotFound } from './components/NotFound';
import { Recipes } from './components/Recipes';
import TopBar from './components/topBar';
import RecipeForm from './components/recipeForm';

class App extends Component {
  render() { 
    return (
      <div>
        <ToastContainer />
        <TopBar />
        <main className='container'>
          <Routes>
            <Route path='/recipes/new' element={<RecipeForm />}/>
            <Route path='/recipes' element={<Recipes/>} />
            <Route path='/' element={<NotFound/>} />
          </Routes>
        </main>
      </div>
    );
  }
}
 
export default App;