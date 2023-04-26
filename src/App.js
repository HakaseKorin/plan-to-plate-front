import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { NotFound } from './components/notFound';
import TopBar from './components/topBar';
import RecipeForm from './components/recipeForm';
import Login from './components/login';
import Registration from './components/registration';
import 'react-toastify/dist/ReactToastify.css'
import './App.css';
import Recipes from './components/recipes';
import { Landing } from './components/landing';

class App extends Component {
  render() { 
    return (
      <div>
        <ToastContainer />
        <TopBar />
        <main className='container'>
          <Routes>
            <Route path='/registration' element={<Registration />} />
            <Route path='/login' element={<Login />} />
            <Route path='/recipes/new' element={<RecipeForm />}/>
            <Route path='/recipes' element={<Recipes />} />
            <Route path='/' element={<Landing/> } />
            <Route path='/*' element={<NotFound/>} />
          </Routes>
        </main>
      </div>
    );
  }
}
 
export default App;