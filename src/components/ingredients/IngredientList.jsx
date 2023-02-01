import React from 'react'
import Axios from 'axios'
import { useState, useEffect } from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

export default function IngredientList() {

const [ingredients, setIngredients] = useState([])


  useEffect(() => {
      loadIngredientList();
  }, [])

const loadIngredientList = () => {
  Axios.get("/ingredient/index")
  .then((res) => {
      setIngredients(res.data.ingredients)
  })
  .catch((err) => {
      console.log(err)
  })
}

const allIngredients = ingredients.map((ingredient, index) => (
    <div key={index}>
      <Link to={'/ingredients/ingredient_details?id='+ ingredient._id}>{ingredient.name}</Link>
    </div>
))

  return (
    <div>


        <hr></hr>
        <h1>Ingredients</h1>

        <div>
          <Link to="/ingredients/ingredient_create">New Ingredient</Link>
        </div>
        <hr></hr>

        {allIngredients}

        <hr></hr>
        <div>
          <Link to="/ingredients/ingredient_create">New Ingredient</Link>
        </div>

    </div>
  )
}
