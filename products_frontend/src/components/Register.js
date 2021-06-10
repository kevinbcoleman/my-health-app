import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../actions/userActions'
// import useInputState from '../hooks/useInputState'


const Register = (props) => {
  const emptyUser = { username: '', password: '', email: '' }
  const [user, setUser] = useState(emptyUser)
  const dispatch = useDispatch()

  const userRegister = useSelector(state => state.userRegister)
  // const {userInfo} = userLogin


  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // if(password !== password2) {

    // }
    dispatch(register(user.email, user.username, user.password))
  }

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="text"
          name="email"
          onChange={handleChange}
          value={user.email}
        />
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          type="text"
          name="username"
          onChange={handleChange}
          value={user.username}
        />
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="text"
          name="password"
          onChange={handleChange}
          value={user.password}
        />
        {/* <label htmlFor="password2">Confirm Password:</label>
        <input
          id="password2"
          type="text"
          name="password2"
          onChange={handleChange}
          value={user.password}
        /> */}

        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Register
