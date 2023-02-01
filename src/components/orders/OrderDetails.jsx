import React from 'react'
import { useSearchParams, Link } from "react-router-dom"
import Axios from 'axios'
import { useState, useEffect } from 'react'

export default function OrderDetails() {

    const [searchParams, setSearchParams] = useSearchParams('')
    const [order, setOrder] = useState('')

    const id = searchParams.get('id')

    useEffect(() => {
      loadOrderDetails(id);
    }, [])

    const loadOrderDetails = (id) => {
      Axios.get(`/order/details?id=${id}`)
      .then((res)=> {
        setOrder(res.data.order)
      })
      .catch((err) => {
          console.log(err)
      })
    }
  
    let allItems = []

    if (order != ''){
      allItems = order.items.map((item, index) => (
        <tr key={index}>
          <td><b>Item {index+1}:</b></td>
          <td>{item.name}</td>
          <td>{item.price.toFixed(3)} BHD</td>
        </tr>
      ))


    }


  return (
    <>
      <h1>Order {order._id}</h1>

      
      <table>
        <tbody>

          <tr>
            <td><b>Status: </b></td>
            <td>{order.status}</td>
            <td><Link to={'/orders/order_edit?id='+order._id}>Update</Link></td>
          </tr>
          <tr>
            <td><b>Location: </b></td>
            <td>{order.location}</td>
          </tr>
          <tr>
            <td><b>Ordered by: </b></td>
            <td>hello</td>
          </tr>

          {allItems}

          <tr>
            <td><b>Total: </b></td>
            <td>{order.totalAmount}</td>
          </tr>

        </tbody>
      </table>

    </>
  )
}
