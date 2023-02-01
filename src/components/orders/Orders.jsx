import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

import OrderList from './OrderList'
import OrderDetails from './OrderDetails'
import OrderCreate from './OrderCreate'
import OrderEdit from './OrderEdit'

export default function Orders() { 

  return (
    <div>

        <Routes>
            <Route path='/' element={<OrderList />}></Route>
            <Route path='/order_details' element={<OrderDetails />}></Route>
            <Route path='/order_create' element={<OrderCreate />}></Route>
            <Route path='/order_edit' element={<OrderEdit />}></Route>
        </Routes>

    </div>
  )
}
