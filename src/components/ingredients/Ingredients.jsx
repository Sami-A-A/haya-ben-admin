import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link, useNavigate} from 'react-router-dom'
import Axios from 'axios'
import { useState, useEffect } from 'react'

import IngredientList from './IngredientList'
import IngredientDetails from './IngredientDetails'
import IngredientCreate from './IngredientCreate'
import IngredientEdit from './IngredientEdit'
import IngredientDelete from './IngredientDelete'

export default function Ingredients() {

  return (
    <div>

        <Routes>
            <Route path='/' element={<IngredientList />}></Route>
            <Route path='/ingredient_details' element={<IngredientDetails />}></Route>
            <Route path='/ingredient_create' element={<IngredientCreate />}></Route>
            <Route path='/ingredient_edit' element={<IngredientEdit />}></Route>
            <Route path='/ingredient_delete' element={<IngredientDelete />}></Route>
        </Routes>

    </div>
  )
}
