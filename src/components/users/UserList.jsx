import React from 'react'
import Axios from 'axios'
import { useState, useEffect } from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

export default function UserList() {


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
      <Link to={'/users/user_details?id='+ user._id}>{user.username}</Link>
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
