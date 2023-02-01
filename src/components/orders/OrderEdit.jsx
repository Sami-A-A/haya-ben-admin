import React from 'react'
import Axios from 'axios'
import { useState, useEffect } from 'react'
import {  useSearchParams, useNavigate } from 'react-router-dom'

export default function ItemEdit() {

  const [searchParams, setSearchParams] = useSearchParams('')
  const [item, setItem] = useState({})

  const id = searchParams.get('id')
 
  let navigate = useNavigate()

  useEffect(() => {
    loadItemDetails(id);
  }, [])

  const loadItemDetails = (id) => {
    Axios.get(`/menu/edit?id=${id}`)
    .then((res)=> {
        setItem(res.data.item)
    })
    .catch((err) => {
        console.log(err)
    })
  }


  const editItem = (item) => { 
      Axios.put("/menu/update", item)
      .then((res)=> {
          navigate('/menu/item_details?id='+ item._id)
      })
      .catch((err) => {
          console.log(err)
      })
  }

  const handleChange = (event) => {
    const attributeToChange = event.target.name
    const newValue = event.target.value

    const updatedItem = {...item}
    updatedItem[attributeToChange] = newValue
    setItem(updatedItem)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    editItem(item)
    e.target.reset()
  }

  return (
    <div>
      <h3>Update Form</h3>
      
      <form id='itemform' onSubmit={handleSubmit}>

        <table>
          <tbody>
            <tr>
              <td><label>Item Name</label></td>
              <td><input type='text' name='name' defaultValue={item.name} placeholder='Item Name' onChange={handleChange}></input></td>
            </tr>

            <tr>
              <td><label>Category</label></td>
              <td>
                <select name='category' form='itemform' value={item.category} onChange={handleChange}>
                  <option value="Custom Bento">Custom Bento</option>
                  <option value="Special">Special</option>
                  <option value="Kyaraben">Kyaraben</option>
                  <option value="Drink">Drink</option>
                </select>
              </td>
            </tr>
            <tr>
              <td><label>Price</label></td>
              <td><input type='number' name='price' defaultValue={item.price} placeholder='Price in BHD' onChange={handleChange}></input></td>
            </tr>
            <tr>
              <td><label>Description</label></td>
              <td><input type='text' name='description' defaultValue={item.description} placeholder='Description' onChange={handleChange}></input></td>
            </tr>

            <tr>
              <td><label>Image URL</label></td>
              <td><input type='text' name='imageURL' defaultValue={item.imageURL} placeholder='URL' onChange={handleChange}></input></td>
            </tr>
            <tr><td><input type="submit"></input></td></tr>
          </tbody>
        </table>

      </form>

    </div>
  )
}
