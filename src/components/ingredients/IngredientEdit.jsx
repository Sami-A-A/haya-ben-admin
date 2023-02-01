import React from 'react'
import Axios from 'axios'
import { useState, useEffect } from 'react'
import {  useSearchParams, useNavigate } from 'react-router-dom'

export default function IngredientEdit() {

  const [searchParams, setSearchParams] = useSearchParams('')
  const [ingredient, setIngredient] = useState({})

  const id = searchParams.get('id')
 
  let navigate = useNavigate()

  useEffect(() => {
    loadIngredientDetails(id);
  }, [])

  const loadIngredientDetails = (id) => {
    Axios.get(`/ingredient/edit?id=${id}`)
    .then((res)=> {
        setIngredient(res.data.ingredient)
    })
    .catch((err) => {
        console.log(err)
    })
  }


  const editIngredient = (ingredient) => { 
      Axios.put("/ingredient/update", ingredient)
      .then((res)=> {
          navigate('/ingredients/ingredient_details?id='+ ingredient._id)
      })
      .catch((err) => {
          console.log(err)
      })
  }

  const handleChange = (event) => {
    const attributeToChange = event.target.name
    const newValue = event.target.value
    const updatedIngredient = {...ingredient}
    updatedIngredient[attributeToChange] = newValue
    setIngredient(updatedIngredient)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    editIngredient(ingredient)
    e.target.reset()
  }

  return (
    <div>
      <h3>Update Form</h3>
      
      <form id='ingredientform' onSubmit={handleSubmit}>

        <table>
          <tbody>
            <tr>
              <td><label>Ingredient Name</label></td>
              <td><input type='text' name='name' defaultValue={ingredient.name} placeholder='Ingredient Name' onChange={handleChange}></input></td>
            </tr>

            <tr>
              <td><label>Category</label></td>
              <td>
              <select name='category' value={ingredient.category} form='ingredientform' onChange={handleChange}>
                  <option value="Carbohydrate">Carbohydrate</option>
                  <option value="Protein">Protein</option>
                  <option value="Vegetable">Vegetables & Salads</option>
                  <option value="PickleFruit">Fruits & Pickles</option>
                </select>
              </td>
            </tr>
            <tr>
              <td><label>Price</label></td>
              <td><input type='number' name='price' defaultValue={ingredient.price} placeholder='Price in BHD' onChange={handleChange}></input></td>
            </tr>
            <tr>
              <td><label>Description</label></td>
              <td><input type='text' name='description' defaultValue={ingredient.description} placeholder='Description' onChange={handleChange}></input></td>
            </tr>

            <tr>
              <td><label>Image URL</label></td>
              <td><input type='text' name='imageURL' defaultValue={ingredient.imageURL} placeholder='URL' onChange={handleChange}></input></td>
            </tr>
            <tr><td><input type="submit"></input></td></tr>
          </tbody>
        </table>

      </form>

    </div>
  )
}
