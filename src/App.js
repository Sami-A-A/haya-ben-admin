import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

// Components
import SignIn from './components/auth/SignIn'
import Home from './components/home/home'
import Users from './components/users/Users'
import Orders from './components/orders/Orders'
import Ingredients from './components/ingredients/Ingredients'
import Items from './components/items/Items'
import Addresses from './components/addresses/AddressList'

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
            <Route path='/signin' element={<SignIn />}></Route>
            <Route path='/users/*' element={<Users />}></Route>
            <Route path='/orders/*' element={<Orders />}></Route>
            <Route path='/menu/*' element={<Items />}></Route>
            <Route path='/ingredients/*' element={<Ingredients />}></Route>
            <Route path='/addresses' element={<Addresses />}></Route>
            
          </Routes>

          </div>



        <div>
        {/* Other information on orders */}
        {/* Pending Orders */}
        </div>
      

    </div>
  )
}
