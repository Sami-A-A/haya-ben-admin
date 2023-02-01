import React, {Fragment} from 'react'
import Axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function OrderCreate() {

  const [items, setItems] = useState([])
  const [users, setUsers] = useState([])
  const [newOrder, setNewOrder] = useState({})
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)
 
  let navigate = useNavigate()

  useEffect(()=>{
    loadAllUsers()
    loadAllItems()
  },[])

  // load user index
  const loadAllUsers = () => {
    Axios.get('/user/index')
    .then(res =>{
      setUsers(res.data.users)
    })
    .catch(err => {
      console.log(err)
    })
  }

  // load item index
  const loadAllItems = () => {
    Axios.get('/menu')
    .then(res => {
      setItems(res.data.items)
    })
    .catch(err => {
      console.log(err)
    })
  }
  
  // create new order
  const createNewOrder = (order) => {
    
    Axios.post('/order/create', order)
    .then(res => {
      console.log(res.data.order)
      navigate('/orders')
    })
    .catch(err => {
      console.log(err)
    })
  }

  const handleChange = (event) => {
    const attributeToChange = event.target.name
    const newValue = event.target.value
    const updatedOrder = {...newOrder}
    updatedOrder[attributeToChange] = newValue
    setNewOrder(updatedOrder)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    createNewOrder(newOrder)
    e.target.reset()
  }


  const onAdd = (id, price) => {
    console.log(cart)
    // console.log(`adding ${id} to cart`)
    setCart(current => [...current, {id}])
    setTotal(current => current += price)
  }

  const onRemove = (id, price) => {
    let cartItems = cart
    cartItems.splice(cartItems.indexOf(id), 1)
    console.log(cartItems)
    // console.log(`removing ${id} to cart`)
    setCart(cartItems)
    setTotal(current => current -= price)
  }

  
  const allUsers = users.map((user,index) => (
      <option value={user._id} key={index}>{index + 1}. {user.username}</option>
  ))

  const allItems = items.map((item,index) => (

    <tr key={index}>
      <td><b>{item.name}</b></td>
      <td>
        <button type="button" onClick={() => onAdd(item._id, item.price)}>Add</button>
        <button type="button" onClick={() => onRemove(item._id, item.price)}>Remove</button>
      </td>
    </tr>
  ))

  return (
    <div>

      <h3>Create Order Form</h3>

      <form id='orderform' onSubmit={handleSubmit}>

        <table>
          <tbody>
            <tr>
              <td><label>User: </label></td>
              <td>
                <select name="user" form='orderform' onChange={handleChange}>
                  {allUsers}
                </select>
              </td>
            </tr>

            <tr>
              <td><label>Location: </label></td>
              <td><input type='text' name='location' placeholder='Location' onChange={handleChange}></input></td>
            </tr>
            <tr>
              <td>Items:</td>
            </tr>

            {allItems}

            <tr>
              <td>Cart:</td>
            </tr>

            <tr>
              <td><label>Total in BHD: </label></td>
              <td><input type='number' name='totalAmount' value={Number(total).toFixed(3)} placeholder='Total in BD' onChange={handleChange}></input></td>
            </tr>


            <tr><td><input type="submit"></input></td></tr>

          </tbody>
        </table>

      </form>
      


    </div>
  )
}

