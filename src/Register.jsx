import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { FaMusic } from "react-icons/fa";
const Register = () => {
  let navigate = useNavigate();
  let handleNavigate = () => {
    navigate('/');
  }
  let [registerdata, setregisterdata] = useState({
    fname: '',
    lname: '',
    email: '',
    password: ''
  })
  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(registerdata);
    handleNavigate();
  }
  let handleChange = (e) => {
    let { name, value } = e.target;
    setregisterdata({ ...registerdata, [name]: value })
  }
  return (
    <div className='registerpage'>
      <div className='mainLeft'>
        <img src="./public/login_register_Image.png" alt="" height='300px' />
      </div>
      <div className='mainRight'>
        <h1 className='mainhead'><sub><FaMusic /></sub>RegisterPage<sub><FaMusic /></sub></h1>
        <form action="" onSubmit={handleSubmit}>
          <input type="text" name='fname' placeholder='Enter First Name' value={registerdata.fname} onChange={handleChange} /><br />
          <input type="text" name='lname' placeholder='Enter Last Name' value={registerdata.lname} onChange={handleChange} /><br />
          <input type="email" name='email' placeholder='Enter Email' value={registerdata.email} onChange={handleChange} /><br />
          <input type="password" name='password' placeholder='Enter Password' value={registerdata.password} onChange={handleChange} /><br />
          <p className='registerlink'>Already have an Account?&nbsp;&nbsp;&nbsp;&nbsp;<NavLink to='/'><button className='link'>SignIn</button></NavLink></p>
          <button type='submit' className='btn'>Register</button>
        </form>
      </div>
    </div>
  )
}

export default Register
