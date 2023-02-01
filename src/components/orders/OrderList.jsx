import React from 'react'
import Axios from 'axios'
import moment from 'moment'
import { useState, useEffect } from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

export default function OrderList() {

const [orders, setOrders] = useState([])


  useEffect(() => {
      loadOrderList();
  }, [])

const loadOrderList = () => {
  Axios.get("/order/history")
  .then((res) => {
      setOrders(res.data.orders)
  })
  .catch((err) => {
      console.log(err)
  })
}

const allOrders = orders.map((order, index) => (
    <div key={index}>
      <table>
        <thead>
          <tr>
            <th>Order Id</th>
            <th>Status</th>
            <th>Created</th>
            <th>Last Updated</th>
          </tr>
        </thead>
        
        <tbody>

          <tr>
            <td><Link to={'/orders/order_details?id='+ order._id}>{order._id}</Link></td>
            <td>{order.status}</td>
            <td>{moment(order.createdAt).fromNow()}</td>
            <td>{moment(order.updatedAt).fromNow()}</td>
          </tr>
        </tbody>
      </table>
    </div>
))

  return (
    <div>


        <hr></hr>
        <h1>Orders</h1>

        <div>
          <Link to="/orders/order_create">New Order</Link>
        </div>
        <hr></hr>

        {allOrders}

        <hr></hr>
        <div>
          <Link to="/orders/order_create">New Order</Link>
        </div>

    </div>
  )
}
