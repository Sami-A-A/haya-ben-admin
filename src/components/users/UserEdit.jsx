import React from 'react'
import Axios from 'axios'
import { useState, useEffect } from 'react'
import {BrowserRouter as Router, Routes, Route, Link, useSearchParams } from 'react-router-dom'

export default function UserEdit(props) {

  const [searchParams, setSearchParams] = useSearchParams()
  const [user, setUser] = useState({})

  const id = searchParams.get('id')
 

  useEffect(() => {
    loadUserDetails(id);
  }, [])

  const loadUserDetails = (id) => {
    Axios.get(`/user/edit?id=${id}`)
    .then((res)=> {
        setUser(res.data.user)
    })
    .catch((err) => {
        console.log(err)
    })
  }

  const handleChange = (event) => {
    const attributeToChange = event.target.name
    const newValue = event.target.value

    const updatedUser = {...user}
    updatedUser[attributeToChange] = newValue
    setUser(updatedUser)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.editUser(user)
    e.target.reset()
  }

  return (
    <div>
      <h1>Update Form</h1>
      
      <form onSubmit={handleSubmit} id='userform'>
        
        <table>
          <tbody>
            <tr>
              <td><label><b>Username: </b></label></td>
              <td><input type='text' name='username' value={user.username} onChange={handleChange}></input></td>
            </tr>
            <tr>
              <td><label><b>Role: </b></label></td>
              <td>
                <select name='role' form='userform' onChange={handleChange}>
                  <option value="Basic">Basic</option>
                  <option value="Admin">Admin</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>

        <br></br>

        <input type='submit' value='Submit'></input>
      </form>
      
    </div>
  )
}
