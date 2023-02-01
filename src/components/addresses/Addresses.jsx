import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link, Outlet} from 'react-router-dom'


export default function Addresses() {
  return (
    <div>
        These are addresses

        <Link to="/addresses/addresslist">Click to display addresslist</Link>
        <Outlet />
    </div>
  )
}
