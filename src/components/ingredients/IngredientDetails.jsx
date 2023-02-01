import React from 'react'
import { useSearchParams, Link } from "react-router-dom"
import Axios from 'axios'
import { useState, useEffect } from 'react'

export default function IngredientDetails() {

    const [searchParams, setSearchParams] = useSearchParams('')
    const [ingredient, setIngredient] = useState({})

    const id = searchParams.get('id')

    useEffect(() => {
      loadIngredientDetails(id);
    }, [])

    const loadIngredientDetails = (id) => {
      Axios.get(`/ingredient/details?id=${id}`)
      .then((res)=> {
          setIngredient(res.data.ingredient)
      })
      .catch((err) => {
          console.log(err)
      })
    }

  return (
    <>
      <h3>{ingredient.name}</h3>

      <table>
        <tbody>

          <tr>
            <td><b>Name: </b></td>
            <td>{ingredient.name}</td>
            <td><Link to={'/ingredients/ingredient_edit?id='+ingredient._id}>Edit</Link></td>
            <td><Link to={'/ingredients/ingredient_delete?id='+ingredient._id}>Delete</Link></td>
          </tr>
          <tr>
            <td><b>Category: </b></td>
            <td>{ingredient.category}</td>
          </tr>
          <tr>
            <td><b>Price: </b></td>
            <td>{Number(ingredient.price).toFixed(3)} BHD</td>
          </tr>
          <tr>
            <td><b>Description: </b></td>
            <td>{ingredient.description}</td>
          </tr>
          <tr>
            <td><b>Image URL: </b></td>
            <td>{ingredient.imageURL}</td>
          </tr>


        </tbody>
      </table>

    </>
  )
}
