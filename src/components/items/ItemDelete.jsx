import React from 'react'
import { useSearchParams, useNavigate, Link } from "react-router-dom"
import Axios from 'axios'

export default function ItemDelete() {

  let navigate = useNavigate()

  const [searchParams, setSearchParams] = useSearchParams('')
  const id = searchParams.get('id')
  
  const handleRedirect = () => {
    navigate(`menu/item_details?id=${id}`)
  }


  const deleteItem = () => {
    Axios.delete(`/item/delete?id=${id}`)
    .then((res)=>{
      navigate("/menu")
    })
    .catch((err) => {
      console.log(err)
    })
  }



  return (
    <div>
      <p>Are you sure you want to delete item?</p>
      <button onClick={deleteItem}>Yes, erase from existence</button>
      <button onClick={handleRedirect}>No, wait we need to eat</button>
    </div>
  )
}
