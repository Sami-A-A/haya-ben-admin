import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link, useNavigate} from 'react-router-dom'
import Axios from 'axios'
import { useState, useEffect } from 'react'

import UserList from './UserList'
import UserDetails from './UserDetails'
import UserCreate from './UserCreate'
import UserEdit from './UserEdit'
import UserDelete from './UserDelete'

export default function Users() {

    

  return (
    <div>

        <Routes>
            <Route path='/' element={<UserList />}></Route>
            <Route path='/user_details' element={<UserDetails />}></Route>
            <Route path='/user_create' element={<UserCreate />}></Route>
            <Route path='/user_edit' element={<UserEdit />}></Route>
            <Route path='/user_delete' element={<UserDelete />}></Route>
        </Routes>

    </div>
  )
}
