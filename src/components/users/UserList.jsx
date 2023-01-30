import React from 'react'
import Axios from 'axios'
import { useState, useEffect } from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import UserDetails from './UserDetails'

export default function UserList(props) {

    const [users, setUsers] = useState([])

    useEffect(() => {
        loadUserList();
    }, [])

  const loadUserList = () => {
    Axios.get("user/index")
    .then((res) => {
        setUsers(res.data.users)
    })
    .catch((err) => {
        console.log(err)
    })
  }




const allUsers = users.map((user, index) => (
    <div key={index}>
        <Link to={"/user/details/" + `${user._id}`}>{user._id}</Link>
    </div>
))

  return (
    <div>

        <h1>Users</h1>
        {allUsers}

        <div>
        </div>

    </div>
  )
}
