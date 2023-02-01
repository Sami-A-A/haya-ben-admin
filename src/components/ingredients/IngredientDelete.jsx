import React from 'react'
import { useSearchParams, useNavigate, Link } from "react-router-dom"
import Axios from 'axios'

export default function IngredientDelete() {

  let navigate = useNavigate()

  const [searchParams, setSearchParams] = useSearchParams('')
  const id = searchParams.get('id')
  
  const handleRedirect = () => {
    navigate(`ingredients/ingredient_details?id=${id}`)
  }


  const deleteIngredient = () => {
    Axios.delete(`/ingredient/delete?id=${id}`)
    .then((res)=>{
      navigate("/ingredients")
    })
    .catch((err) => {
      console.log(err)
    })
  }



  return (
    <div>
      <p>Are you sure you want to delete ingredient?</p>
      <button onClick={deleteIngredient}>Yes, erase from existence</button>
      <button onClick={handleRedirect}>No, wait I like {'<<name of ingredient here>>'}</button>
    </div>
  )
}
