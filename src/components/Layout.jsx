import React from 'react'
import { Navbar } from './navbar'
import { Footer } from './footer'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <>
<Navbar />
<main className='container d-flex justify-content-center align-items-center'>
    <Outlet />
</main>
<Footer/>

    </>
  )
}
