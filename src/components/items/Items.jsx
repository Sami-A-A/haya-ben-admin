import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link, useNavigate} from 'react-router-dom'
import Axios from 'axios'
import { useState, useEffect } from 'react'

import ItemList from './ItemList'
import ItemDetails from './ItemDetails'
import ItemCreate from './ItemCreate'
import ItemEdit from './ItemEdit'
import ItemDelete from './ItemDelete'

export default function Items() {

  return (
    <div>

        <Routes>
            <Route path='/' element={<ItemList />}></Route>
            <Route path='/item_details' element={<ItemDetails />}></Route>
            <Route path='/item_create' element={<ItemCreate />}></Route>
            <Route path='/item_edit' element={<ItemEdit />}></Route>
            <Route path='/item_delete' element={<ItemDelete />}></Route>
        </Routes>

    </div>
  )
}
