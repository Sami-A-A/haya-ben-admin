import React from 'react'
import Axios from 'axios'
import { useState, useEffect } from 'react'
import {  useSearchParams, useNavigate } from 'react-router-dom'

export default function UserEdit() {

  const [searchParams, setSearchParams] = useSearchParams('')
  const [user, setUser] = useState({})

  const id = searchParams.get('id')
 
  let navigate = useNavigate()

  useEffect(() => {
    loadUserDetails(id);
  }, [])

  const loadUserDetails = (id) => {
    Axios.get(`/user/edit?id=${id}`, {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("token")
      }
    })
    .then((res)=> {
        setUser(res.data.user)
    })
    .catch((err) => {
        console.log(err)
    })
  }


  const editUser = (user) => { 
      Axios.put("/user/update", user , {
        headers: {
          "Authorization": "Bearer " + localStorage.getItem("token")
        }
      })
      .then((res)=> {
          navigate('/users/user_details?id='+ user._id)
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
    editUser(user)
    e.target.reset()
  }

  return (
    <div>
      <h3>Update Form</h3>
      
      <form onSubmit={handleSubmit} id='userform'>
        
        <table>
          <tbody>
            <tr>
              <td><label><b>Username: </b></label></td>
              <td><input type='text' name='username' defaultValue={user.username} onChange={handleChange}></input></td>
            </tr>
            <tr>
              <td><label><b>Role: </b></label></td>
              <td>
                <select name='role' value={user.role} form='userform' onChange={handleChange}>
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
