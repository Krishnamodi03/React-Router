import React, { useState } from 'react'
import { FaMusic } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const Login = () => {
  let [logindata, setlogindata] = useState({
    email: '',
    password: ''
  })
  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(logindata);
  }
  let handleChange = (e) => {
    let { name, value } = e.target;
    setlogindata({ ...logindata, [name]: value })
  }
  return (
    <div className='loginpage'>
        <div className='mainLeft'>
          <img src="./public/login_register_Image.png" alt="" height='300px'/>
        </div>
        <div className='mainRight'>
          <h1 className='mainhead'><sub><FaMusic/></sub>LoginPage<sub><FaMusic/></sub></h1>
          <form action="" onSubmit={handleSubmit}>
            <input type="text" name="email" placeholder='Enter Email' onChange={handleChange} value={logindata.email} /><br />
            <input type="password" name='password' placeholder='Enter Password' onChange={handleChange} value={logindata.password} /><br />
            <p className='loginlink'>Already have an Account?&nbsp;&nbsp;&nbsp;&nbsp;<NavLink to='/register'><button className='link'>SignUp</button></NavLink></p>
            <button type="submit" className='btn loginbtn'>Login</button>
          </form>
        </div>
      </div>
      )
}

      export default Login
