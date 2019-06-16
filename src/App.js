import React, { Component } from 'react';
import './App.css';
import Form from './Form'

const API_KEY = "e7851e20db27718422053cee2758743f"


class App extends Component {

  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value
    e.preventDefault()
    const api_call = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=shredded%20chicken`)

    const data = await api_call.json()
    console.log(data)

  }

  render() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Recipe Search</h1>
      </header>
      <Form getRecipe={this.getRecipe}/>
    </div>
  );
}
}

export default App;
