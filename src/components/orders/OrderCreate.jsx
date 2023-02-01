import React, {Fragment} from 'react'
import Axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function OrderCreate() {

  const [items, setItems] = useState([])
  const [users, setUsers] = useState([])
  const [newOrder, setNewOrder] = useState({})
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

  const onAdd = (id) => {
    console.log('good')
  }
  
  const onRemove = (id) => {
    console.log(id)
  }


  const allUsers = users.map((user,index) => (
      <option value={user._id} key={index}>{index + 1}. {user.username}</option>
  ))

  const allItems = items.map((item,index) => (
        <React.Fragment key={index}>
          <tr>
            <td><b>{item.name}</b></td>
            <td>
              <button onClick={onAdd(item._id)}>Add</button>
              <button onClick={onRemove(item._id)}>Remove</button>
            </td>
            <td></td>
          </tr>
        </React.Fragment>
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
              <td><label>Total in BHD: </label></td>
              <td><input type='number' value={total} name='totalAmount' placeholder='Total in BD' onChange={handleChange} readOnly></input></td>
            </tr>

            <tr><td><input type="submit"></input></td></tr>

          </tbody>
        </table>

      </form>
      
    </div>
  )
}

