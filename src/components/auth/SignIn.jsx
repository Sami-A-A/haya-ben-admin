import React, {useState} from 'react'

export default function SignIn(props) {

  const [newUser, setNewUser] = useState({});

    const changeHandler = (e) => {
        const user = {...newUser}
        user[e.target.name] = e.target.value;
        console.log(user)
        setNewUser(user);
    }

    const loginHandler = () => {
        props.loginHandler(newUser)
    }

  return (
    <div>
      <div>
        <div>
          <div>
            <h1>Sign In</h1>
          </div>

          <form onSubmit={props.handleSubmit}>
            <div>
              <input name='emailAddress' type='email' placeholder='Email' onChange={changeHandler} required/>
            </div>

            <div>
              <input name='password' type='password' placeholder='Password' onChange={changeHandler} required/>
            </div>
            
            <div>
              <button type='submit' name='Submit'  onClick={loginHandler}>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
