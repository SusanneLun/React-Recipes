import React, { Component } from 'react'


const API_KEY = "e7851e20db27718422053cee2758743f"

class Recipe extends Component {
  state = {
    activeRecipe: []
  }

  componentDidMount = async ()=> {
    const title = this.props.location.state.recipe
    const req = await fetch
    (`https://www.food2fork.com/api/search?key=${API_KEY}&q=${title}`)

    const res = await req.json()
    this.setState({ activeRecipe: res.recipes[0]})
    console.log(this.state.activeRecipe)
  }

render() {
  const recipe = this.state.activeRecipe
  return (
    <div className="container">
      <div className="active-recipe">
        <img className="active-recipe__img"
        src={recipe.image_url}
        alt={recipe.title}/>
        <h3 className="active-recipe__title">{ recipe.title }</h3>
        <h4 className="active-recipe__publisher">
        Publisher: <span>{ recipe.publisher }</span>
        </h4>
        <p className="active-recipe__website">
        Website: <span><a href={recipe.publisher_url}>{recipe.publisher_url}</a></span>
        </p>
      </div>
    </div>

  )
}
}




export default Recipe
