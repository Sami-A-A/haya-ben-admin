import React from 'react'
import {useParams} from "react-router-dom"
import Axios from 'axios'
import { useState, useEffect } from 'react'

export default function UserDetails() {

  const {id} = useParams()

  const [user, setUser] = useState([])

  useEffect(() => {
    loadUserDetails(id);
  }, [])

  const loadUserDetails = (id) => {
    Axios.get("/user/details/"+id)
    .then((res)=> {
        console.log(res.data.user)
        setUser(res.data.user)
    })
    .catch((err) => {
        console.log(err)
    })
  }

  return (
    <>
    <h1>{user.username}</h1>
        <p>{user._id}</p>
        <p>{user.emailAddress}</p>
        <p>{user.contact}</p>
    </>
  )
}
