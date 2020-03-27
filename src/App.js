import React, { useState } from 'react'
import './App.css'
import Axios from 'axios'

const App = () => {
  const [query, setQuery] = useState('');

  const APP_ID = '34acae91';

  const APP_KEY = '9ffe4f1ebfcd6589e1b1602da832fe4b';

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const getData = async () => {
    const result = await Axios.get(url)

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
    </div>
  )
}

export default App
