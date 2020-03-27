import React, { useState } from 'react'
import './App.css'
import Axios from 'axios'
import Recipe from './Components/Recipe'
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  const [query, setQuery] = useState('');

  const [recipes, setRecipes] = useState([]);

  const APP_ID = '34acae91';

  const APP_KEY = '9ffe4f1ebfcd6589e1b1602da832fe4b';

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const getData = async () => {
    const result = await Axios.get(url)
    setRecipes(result.data.hits)

    console.log(result)

    setQuery('')
  }

  const onChange = e =>{
    setQuery(e.target.value)
  }

  const onSubmit = e => {
    e.preventDefault();
    getData()

  }

  return (
    <div className='App'>
      <h1>Food Searching App</h1>
      <form className = 'search-form' onSubmit = {onSubmit}>

        <input
          type = 'text'
          placeholder = 'Search Food'
          autoComplete = 'off'
          onChange = {onChange}
          value = {query}
        />

        <input type = 'submit' value = 'search' />

      </form>
      <div className = 'recipes'>

        {recipes !== [] && recipes.map(recipe =>
          <Recipe key = {uuidv4()} recipe = {recipe}/>)}

      </div>
    </div>
  )
}

export default App
