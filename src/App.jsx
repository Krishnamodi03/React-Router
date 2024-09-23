import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import { Provider } from "react-redux"
import Store from './redux/Store'

const App = () => {
  let router = createBrowserRouter([
    {
      path: '/',
      element: <Login />
    },
    {
      path: '/register',
      element: <Register />
    }
  ])
  return (
    <Provider store={Store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  )
}

export default App