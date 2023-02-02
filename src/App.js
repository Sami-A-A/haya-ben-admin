import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router, Routes, Route, Link, useNavigate} from 'react-router-dom'
import Axios from 'axios'
import jwt_decode from 'jwt-decode'

// Components
import SignIn from './components/auth/SignIn'
import Home from './components/home/home'
import Users from './components/users/Users'
import Orders from './components/orders/Orders'
import Ingredients from './components/ingredients/Ingredients'
import Items from './components/items/Items'
import Addresses from './components/addresses/Addresses'
import AddressList from './components/addresses/AddressList'

export default function App() {

  let navigate = useNavigate();

  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token != null) {
      let user = jwt_decode(token);

      if (user) {
        setIsAuth(true);
        setUser(user);
      }
      else if (user) {
        localStorage.removeItem("token");
        setIsAuth(false);
      }
    }
  }, [])

  // const registerHandler = (user) => {
  //   Axios.post("/auth/signup", user)
  //   .then(res => {
  //     console.log(res)
  //     let path = '/signin';
  //     navigate(path);
  //   })
  //   .catch(err => {
  //     console.log(err)
  //   })
  // }

  const loginHandler = (cred) => {
    Axios.post("auth/signin", cred)
    .then(res => {
      console.log(res.data.token)
      let token = res.data.token
      if (token != null) {
        localStorage.setItem("token", token)
        let user = jwt_decode(token) 
        setIsAuth(true)
        setUser(user)
        navigate('/users');
      }
    })
    .catch(err => {
      console.log(err)
      console.log('login failed')
    })
  }

  const onLogoutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    setIsAuth(false);
    setUser(null);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div>

        <div className='flex-container'>
          <div className='nav-container'>
            <div className='top-navbar'>
              <h1>Admin</h1>
              <table>
                <thead>
                  <tr>
                    <td>
                      {isAuth ? (
                      <>
                      {user ? "Hi " + user.user.name + "!" : null} &nbsp;
                      <Link to="/logout" onClick={onLogoutHandler}>Logout</Link>
                          </>
                      ): (
                          <>
                      <Link to='/signin'>Sign In</Link>&nbsp;
                          </>
                      )}
                    </td>
                  </tr>
                </thead>
              </table>
            </div>
            <div className='side-navbar'>
              {/* Dashboard */}
              <h1>Dashboard</h1>
              <nav>
                <ol>
                  <li> <Link to='/'>Home</Link> </li>
                  <li> <Link to='/users'>Users</Link> </li>
                  <li> <Link to='/orders'>Orders</Link> </li>
                  <li> <Link to='/menu'>Menu</Link> </li>
                  <li> <Link to='/ingredients'>Ingredients</Link> </li>
                  <li> <Link to='/addresses'>Addresses</Link> </li>
                </ol>
              </nav>
            </div>
          </div>
          <div className='main-viewport'>
            <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/signin' element={<SignIn handleSubmit={handleSubmit} loginHandler={loginHandler} />}></Route>
              <Route path='/users/*' element={<Users />}></Route>
              <Route path='/orders/*' element={<Orders />}></Route>
              <Route path='/menu/*' element={<Items />}></Route>
              <Route path='/ingredients/*' element={<Ingredients />}></Route>
              <Route path='/addresses' element={<Addresses />}>
                <Route path='addresslist' element={<AddressList/>}></Route>
              </Route>
          
            </Routes>
          </div>
        </div>

          



        <div>
        {/* Other information on orders */}
        {/* Pending Orders */}
        </div>
      

    </div>
  )
}
