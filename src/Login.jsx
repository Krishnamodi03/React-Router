import React, { useState } from 'react';
import { FaMusic } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Login = () => {
  const [logindata, setlogindata] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(logindata);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setlogindata({ ...logindata, [name]: value });
  };

  return (
    <div className="h-[50vh] w-[50vw] flex border-3 border-[#fff783] rounded-2xl">
      <div className="w-2/5 flex items-center justify-center backdrop-blur-md bg-[#fdf16d62] rounded-l-2xl">
        <img src="./public/login_register_Image.png" alt="" className="h-[300px]" />
      </div>
      <div className="p-4 text-center w-3/5 backdrop-blur-md">
        <h1 className="text-3xl text-[#fff783] flex items-center justify-center">
          <FaMusic /> LoginPage <FaMusic />
        </h1>
        <form onSubmit={handleSubmit} className="mt-16 h-[90%] flex flex-col items-center gap-5">
          <input
            type="text"
            name="email"
            placeholder="Enter Email"
            onChange={handleChange}
            value={logindata.email}
            className="bg-transparent text-[#fff783] w-3/4 h-10 border-b border-[#fff783] outline-none placeholder-[#fff783] mb-5"
          />
          <input
            type="password"
            name='password'
            placeholder='Enter Password'
            onChange={handleChange}
            value={logindata.password}
            className="bg-transparent text-[#fff783] w-3/4 h-10 border-b border-[#fff783] outline-none placeholder-[#fff783] mb-5"
          />
          <p className="">
            Already have an Account?&nbsp;&nbsp;&nbsp;&nbsp;
            <NavLink to='/register'>
              <button className="border-none bg-transparent cursor-pointer text-[#fff783] text-lg hover:underline">SignUp</button>
            </NavLink>
          </p>
          <button type="submit" className="mt-2 h-14 w-40 bg-[#fff783] text-[#6eccd5] text-3xl rounded-lg hover:bg-transparent hover:text-[#fff783] hover:border-2 hover:border-[#fff783]">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;