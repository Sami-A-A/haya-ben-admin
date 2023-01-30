import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import { useState } from 'react'


// Components
import SignIn from './components/auth/SignIn'
import Home from './components/home/home'
import UserList from './components/users/UserList'
import Orders from './components/orders/OrderList'
import Ingredients from './components/ingredients/IngredientList'
import Items from './components/items/ItemList'
import Addresses from './components/addresses/AddressList'

import UserDetails from './components/users/UserDetails'

export default function App() {

  return (
    <div>

        <h1>Admin</h1>


          <Link to='/SignIn'>Logout</Link>

          <div>
          {/* Dashboard */}
          <h1>Dashboard</h1>
          <nav>
            <ol>
              <li> <Link to='/'>Home</Link> </li>
              <li> <Link to='/users'>Users</Link> </li>
              <li> <Link to='/orders'>Orders</Link> </li>
              <li> <Link to='/menu'>Menu</Link> </li>
              <li> <Link to='/ingredients'>Ingredients</Link> </li>
              <li> <Link to='/addresses'>Addresses</Link> </li>
            </ol>
          </nav>
          
          <Routes>
          {/* main paths */}
            <Route path='/' element={<Home/>}></Route>
            <Route path='/admin/signin' element={<SignIn />}></Route>
            <Route path='/users' element={<UserList />}></Route>
            <Route path='/orders' element={<Orders />}></Route>
            <Route path='/menu' element={<Items />}></Route>
            <Route path='/ingredients' element={<Ingredients />}></Route>
            <Route path='/addresses' element={<Addresses />}></Route>
            
          
          {/* create paths */}

          {/* detail paths */}
            <Route path="/user/details/:id" element={<UserDetails />}></Route>
           
          {/* update paths */}

          {/* delete paths */}

          </Routes>

          </div>



        <div>
        {/* Other information on orders */}
        {/* Pending Orders */}
        </div>
      

    </div>
  )
}
