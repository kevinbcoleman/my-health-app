import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../actions/userActions'


const Login = (props) => {
  const emptyUser = { username: '', password: '' }
  const [user, setUser] = useState(emptyUser)

  const dispatch = useDispatch()

  const userLogin = useSelector(state => state.userLogin)
  // const {userInfo} = userLogin


  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(login(user.username, user.password))
  }
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
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
        <input type="submit" value="Login" />
      </form>
    </div>
  )
}

export default Login
