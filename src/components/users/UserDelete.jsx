import React from 'react'
import { useSearchParams, useNavigate, Link } from "react-router-dom"
import Axios from 'axios'

export default function UserDelete() {

  let navigate = useNavigate()

  const [searchParams, setSearchParams] = useSearchParams('')
  const id = searchParams.get('id')
  
  const handleRedirect = () => {
    navigate(`users/user_details?id=${id}`)
  }


  const deleteUser = () => {
    Axios.delete(`/user/delete?id=${id}`, {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("token")
      }
    })
    .then((res)=>{
      navigate("/users")
    })
    .catch((err) => {
      console.log(err)
    })
  }



  return (
    <div>
      <p>Are you sure you want to delete user?</p>
      <button onClick={deleteUser}>Yes, erase from existence</button>
      <button onClick={handleRedirect}>No, wait we need their money</button>
    </div>
  )
}
