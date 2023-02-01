import React from 'react'
import { useSearchParams, Link } from "react-router-dom"
import Axios from 'axios'
import { useState, useEffect } from 'react'

export default function ItemDetails() {

    const [searchParams, setSearchParams] = useSearchParams('')
    const [item, setItem] = useState({})

    const id = searchParams.get('id')

    useEffect(() => {
      loadItemDetails(id);
    }, [])

    const loadItemDetails = (id) => {
      Axios.get(`/item/details?id=${id}`)
      .then((res)=> {
          setItem(res.data.item)
      })
      .catch((err) => {
          console.log(err)
      })
    }

    let allIngredients = []

    if (item.ingredients){
    let allIngredients = item.ingredients.map((ingredients, index)=>(
      <tr>
        <td><b>Ingredients{index}: </b></td>
        <td>{ingredients}</td>
      </tr>
    ))
    }

  return (
    <>
      <h1>{item.name}</h1>

      
      <table>
        <tbody>

          <tr>
            <td><b>Name: </b></td>
            <td>{item.name}</td>
            <td><Link to={'/menu/item_edit?id='+item._id}>Edit</Link></td>
            <td><Link to={'/menu/item_delete?id='+item._id}>Delete</Link></td>
          </tr>
          <tr>
            <td><b>Category: </b></td>
            <td>{item.category}</td>
          </tr>
          <tr>
            <td><b>Price: </b></td>
            <td>{Number(item.price).toFixed(3)} BHD</td>
          </tr>
          <tr>
            <td><b>Description: </b></td>
            <td>{item.description}</td>
          </tr>
          <tr>
            <td><b>Image URL: </b></td>
            <td>{item.imageURL}</td>
          </tr>
          
          {allIngredients}

          <tr>
            <td><b>Created: </b></td>
            <td>{item.createdAt}</td>
          </tr>
          <tr>
            <td><b>Last Updated: </b></td>
            <td>{item.createdAt}</td>
          </tr>

        </tbody>
      </table>

    </>
  )
}
