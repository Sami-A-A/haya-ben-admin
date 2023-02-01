import React from 'react'
import Axios from 'axios'
import { useState, useEffect } from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

export default function ItemList() {

const [items, setItems] = useState([])


  useEffect(() => {
      loadItemList();
  }, [])

const loadItemList = () => {
  Axios.get("/menu")
  .then((res) => {
      setItems(res.data.items)
  })
  .catch((err) => {
      console.log(err)
  })
}

const allItems = items.map((item, index) => (
    <div key={index}>
      <Link to={'/menu/item_details?id='+ item._id}>{item.name}</Link>
    </div>
))

  return (
    <div>


        <hr></hr>
        <h1>Items</h1>

        <div>
          <Link to="/menu/item_create">New Item</Link>
        </div>
        <hr></hr>

        {allItems}

        <hr></hr>
        <div>
          <Link to="/menu/item_create">New Item</Link>
        </div>

    </div>
  )
}
