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

 let navigate = useNavigate()

const editUser = (user) => { 
    Axios.put("/user/update", user)
    .then((res)=> {
      navigate('/users/user_details?id='+user._id)
    })
    .catch((err) => {
      console.log(err)
    })
}

  return (
    <div>

        <Routes>
            <Route path='/' element={<UserList />}></Route>
            <Route path='/user_details' element={<UserDetails />}></Route>
            <Route path='/user_create' element={<UserCreate />}></Route>
            <Route path='/user_edit' element={<UserEdit editUser={editUser}/>}></Route>
            <Route path='/user_delete' element={<UserDelete />}></Route>
        </Routes>

    </div>
  )
}
