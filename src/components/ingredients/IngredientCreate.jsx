import React from 'react'
import Axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function IngredientCreate() {

  const [newIngredient, setNewIngredient] = useState({})
 
  let navigate = useNavigate()

  const createNewIngredient = (ingredient) => {
    Axios.post('/ingredient/create', ingredient)
    .then(res => {
      // console.log(res.data.ingredient)
      navigate('/ingredients')
    })
    .catch(err => {
      console.log(err)
    })
  }

  const handleChange = (event) => {
    const attributeToChange = event.target.name
    const newValue = event.target.value
    const updatedIngredient = {...newIngredient}
    updatedIngredient[attributeToChange] = newValue
    setNewIngredient(updatedIngredient)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    createNewIngredient(newIngredient)
    e.target.reset()
  }

  return (
    <div>

      <h3>Create Ingredient Form</h3>

      <form id='ingredientform' onSubmit={handleSubmit}>

        <table>
          <tbody>
            <tr>
              <td><label>Ingredient Name</label></td>
              <td><input type='text' name='name' placeholder='Ingredient Name' onChange={handleChange}></input></td>
            </tr>

            <tr>
              <td><label>Category</label></td>
              <td>
                <select name='category' form='ingredientform' onChange={handleChange}>
                  <option value="carbs">Carbohydrate</option>
                  <option value="protein">Protein</option>
                  <option value="vegetables">Vegetable</option>
                  <option value="fruits">Pickles & Fruit</option>
                </select>
              </td>
            </tr>
            <tr>
              <td><label>Price</label></td>
              <td><input type='number' name='price' placeholder='Price in BHD' onChange={handleChange}></input></td>
            </tr>
            <tr>
              <td><label>Description</label></td>
              <td><input type='text' name='description' placeholder='Description' onChange={handleChange}></input></td>
            </tr>
            <tr>
              <td><label>Image URL</label></td>
              <td><input type='text' name='imageURL' placeholder='URL' onChange={handleChange}></input></td>
            </tr>
            <tr><td><input type="submit"></input></td></tr>
          </tbody>
        </table>

      </form>
      
    </div>
  )
}

