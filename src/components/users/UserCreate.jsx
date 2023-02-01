import React from 'react'
import Axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function UserCreate() {

  const [newUser, setNewUser] = useState({})
 
  let navigate = useNavigate()

  const createNewUser = (user) => {
    Axios.post('/auth/signup', user)
    .then(res => {
      navigate('/users')
    })
    .catch(err => {
      console.log(err)
    })
  }

  const handleChange = (event) => {
    const attributeToChange = event.target.name
    const newValue = event.target.value

    const updatedUser = {...newUser}
    updatedUser[attributeToChange] = newValue
    setNewUser(updatedUser)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    createNewUser(newUser)
    e.target.reset()
  }

  return (
    <div>

      <h3>Create User Form</h3>

      <form id='userform' onSubmit={handleSubmit}>

        <table>
          <tbody>
            <tr>
              <td><label>Role</label></td>
              <td>
                <select name='role' form='userform' onChange={handleChange}>
                  <option value="Basic">Basic</option>
                  <option value="Admin">Admin</option>
                </select>
              </td>
            </tr>
            <tr>
              <td><label>First Name</label></td>
              <td><input type='text' name='firstName' placeholder='First' onChange={handleChange}></input></td>
            </tr>
            <tr>
              <td><label>Last Name</label></td>
              <td><input type='text' name='lastName' placeholder='Last' onChange={handleChange}></input></td>
            </tr>
            <tr>
              <td><label>Username</label></td>
              <td><input type='text' name='username' placeholder='Username' onChange={handleChange}></input></td>
            </tr>
            <tr>
              <td><label>Email Address</label></td>
              <td><input type='text' name='emailAddress' placeholder='Email' onChange={handleChange}></input></td>
            </tr>
            <tr>
              <td><label>Password</label></td>
              <td><input type='password' name='password' placeholder='Password' onChange={handleChange}></input></td>
            </tr>
            <tr>
              <td><label>Mobile</label></td>
              <td><input type='text' name='contact' placeholder='Mobile Number' onChange={handleChange}></input></td>
            </tr>
            <tr><td><input type="submit"></input></td></tr>
          </tbody>
        </table>

      </form>
      
    </div>
  )
}

