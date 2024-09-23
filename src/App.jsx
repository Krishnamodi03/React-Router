import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './Login'
import Register from './Register'

const App = () => {
  let router = createBrowserRouter([
    {
      path: '/',
      element: <Login/>
    },
    {
      path: '/register',
      element: <Register/>
    }
  ])
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App