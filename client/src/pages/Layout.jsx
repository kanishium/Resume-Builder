import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <h1>layout page</h1>
      <div>
        <Outlet/>
      </div>
    </>
  )
}

export default Layout