import React from 'react'
import Axios from 'axios'
import { useState, useEffect } from 'react'
import {  useSearchParams, useNavigate } from 'react-router-dom'

export default function OrderEdit() {

  const [searchParams, setSearchParams] = useSearchParams('')
  const [order, setOrder] = useState({})
  const [items, setItems] = useState([])
  const [total, setTotal] = useState(0)

  const id = searchParams.get('id')
 
  let navigate = useNavigate()

  useEffect(() => {
    loadOrderDetails(id);
  }, [])

  const loadOrderDetails = (id) => {
    Axios.get(`/order/edit?id=${id}`)
    .then((res)=> {
        setOrder(res.data.order)
    })
    .catch((err) => {
        console.log(err)
    })
  }

  const editOrder = (order) => { 
      Axios.put("/order/update", order)
      .then((res)=> {
          navigate('/orders/order_details?id='+ order._id)
      })
      .catch((err) => {
          console.log(err)
      })
  }

  const handleChange = (event) => {
    const attributeToChange = event.target.name
    const newValue = event.target.value
    const updatedOrder = {...order}
    updatedOrder[attributeToChange] = newValue
    setOrder(updatedOrder)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    editOrder(order)
    e.target.reset()
  }


  return (
    <div>
      <h3>Update Order {id}</h3>
      
      <form id='orderform' onSubmit={handleSubmit}>

        <table>
          <tbody>
            
            <tr>
              <td><label>Status</label></td>
              <td>
                <select name='status' form='orderform' defaultValue={order.status} onChange={handleChange}>
                  <option value="Pending">Pending</option>
                  <option value="Delivering">Delivering</option>
                  <option value="Delivered">Delivered</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </td>
              <td>{order.status}</td>
            </tr>
            
            <tr>
              <td><label>Location</label></td>
              <td><input type='text' name='location' defaultValue={order.location} placeholder='Item Name' onChange={handleChange}></input></td>
            </tr>
            
            <tr>
              <td><label>Items: </label></td>
            </tr>



            <tr>
              <td><label>Total in BHD: </label></td>
              <td><input type='number' value={total} name='totalAmount' placeholder='Total in BD' onChange={handleChange} readOnly></input></td>
            </tr>

            <tr><td><input type="submit"></input></td></tr>
          </tbody>
        </table>

      </form>

    </div>
  )
}
