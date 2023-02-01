import React from 'react'
import { useSearchParams, Link } from "react-router-dom"
import Axios from 'axios'
import { useState, useEffect } from 'react'

export default function UserDetails() {

    const [searchParams, setSearchParams] = useSearchParams('')
    const [user, setUser] = useState({})

    const id = searchParams.get('id')

    useEffect(() => {
      loadUserDetails(id);
    }, [])

    const loadUserDetails = (id) => {
      Axios.get(`/user/details?id=${id}`)
      .then((res)=> {
          setUser(res.data.user)
      })
      .catch((err) => {
          console.log(err)
      })
    }

    let allAddresses = []

    if (user.addresses){
    let allAddresses = user.addresses.map((address, index)=>(
      <tr>
        <td><b>Addresses{index}: </b></td>
        <td>{address}</td>
      </tr>
    ))
    }

  return (
    <>
      <h1>{user.username}</h1>

      
      <table>
        <tbody>

          <tr>
            <td><b>Name: </b></td>
            <td>{user.firstName} {user.lastName}</td>
            <td><Link to={'/users/user_edit?id='+user._id}>Edit</Link></td>
            <td><Link to={'/users/user_delete?id='+user._id}>Delete</Link></td>
          </tr>
          <tr>
            <td><b>Role: </b></td>
            <td>{user.role}</td>
          </tr>
          <tr>
            <td><b>Email: </b></td>
            <td>{user.emailAddress}</td>
          </tr>
          <tr>
            <td><b>Contact: </b></td>
            <td>{user.contact}</td>
          </tr>
          <tr>
            <td><b>Created: </b></td>
            <td>{user.createdAt}</td>
          </tr>
          <tr>
            <td><b>Last Updated: </b></td>
            <td>{user.createdAt}</td>
          </tr>

          
          {allAddresses}


        </tbody>
      </table>

    </>
  )
}
