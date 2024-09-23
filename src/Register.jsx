import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaMusic } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { registerUser } from './redux/Actions';

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/');
  };

  const [registerdata, setregisterdata] = useState({
    fname: '',
    lname: '',
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(registerdata);
    dispatch(registerUser(registerdata))
    handleNavigate();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setregisterdata({ ...registerdata, [name]: value });
  };

  return (
    <div className="h-[50vh] w-[50vw] flex border-3 border-[#fff783] rounded-2xl">
      <div className="w-2/5 flex items-center justify-center backdrop-blur-md bg-[#fdf16d62] rounded-l-2xl">
        <img src="./public/login_register_Image.png" alt="" className="h-[300px]" />
      </div>
      <div className="p-4 text-center w-3/5 backdrop-blur-md rounded-r-2xl">
        <h1 className="flex items-center justify-center text-2xl text-[#fff783]">
          <FaMusic /> RegisterPage <FaMusic />
        </h1>
        <form onSubmit={handleSubmit} className="mt-12 h-[90%] flex flex-col items-center gap-2">
          <input
            type="text"
            name='fname'
            placeholder='Enter First Name'
            value={registerdata.fname}
            onChange={handleChange}
            className="bg-transparent text-[#fff783] w-3/4 h-10 border-b border-[#fff783] outline-none placeholder-[#fff783] mb-5"
          />
          <input
            type="text"
            name='lname'
            placeholder='Enter Last Name'
            value={registerdata.lname}
            onChange={handleChange}
            className="bg-transparent text-[#fff783] w-3/4 h-10 border-b border-[#fff783] outline-none placeholder-[#fff783] mb-5"
          />
          <input
            type="email"
            name='email'
            placeholder='Enter Email'
            value={registerdata.email}
            onChange={handleChange}
            className="bg-transparent text-[#fff783] w-3/4 h-10 border-b border-[#fff783] outline-none placeholder-[#fff783] mb-5"
          />
          <input
            type="password"
            name='password'
            placeholder='Enter Password'
            value={registerdata.password}
            onChange={handleChange}
            className="bg-transparent text-[#fff783] w-3/4 h-10 border-b border-[#fff783] outline-none placeholder-[#fff783] mb-5"
          />
          <p className="">
            Already have an Account?&nbsp;&nbsp;&nbsp;&nbsp;
            <NavLink to='/'>
              <button className="border-none bg-transparent cursor-pointer text-[#fff783] text-lg hover:underline">SignIn</button>
            </NavLink>
          </p>
          <button type='submit' className="mt-2 h-14 w-40 bg-[#fff783] text-[#6eccd5] text-2xl rounded-lg hover:bg-transparent hover:text-[#fff783] hover:border-2 hover:border-[#fff783]">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;