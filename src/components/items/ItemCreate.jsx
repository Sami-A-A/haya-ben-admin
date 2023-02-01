import React from 'react'
import Axios from 'axios'
import { useState, useEffect } from 'react'
import {  useSearchParams, useNavigate } from 'react-router-dom'

export default function ItemCreate() {

  const [searchParams, setSearchParams] = useSearchParams('')
  const [newItem, setNewItem] = useState({})

  const id = searchParams.get('id')
 
  let navigate = useNavigate()

  const createNewItem = (item) => {
    Axios.post('/item/create', item)
    .then(res => {
      console.log(res.data.item)
      navigate('/menu')
    })
    .catch(err => {
      console.log(err)
    })
  }

  const handleChange = (event) => {
    const attributeToChange = event.target.name
    const newValue = event.target.value

    const updatedItem = {...newItem}
    updatedItem[attributeToChange] = newValue
    setNewItem(updatedItem)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    createNewItem(newItem)
    e.target.reset()
  }

  return (
    <div>

      <h3>Create Item Form</h3>

      <form id='itemform' onSubmit={handleSubmit}>

        <table>
          <tbody>
            <tr>
              <td><label>Item Name</label></td>
              <td><input type='text' name='name' placeholder='Item Name' onChange={handleChange}></input></td>
            </tr>

            <tr>
              <td><label>Category</label></td>
              <td>
                <select name='category' form='itemform' onChange={handleChange}>
                  <option value="Custom Bento">Custom Bento</option>
                  <option value="Specials">Specials</option>
                  <option value="Kyaraben">Kyaraben</option>
                  <option value="Drinks">Drinks</option>
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

