import React from 'react'
import { Navbar } from './navbar'
import { Footer } from './footer'

export const Layout = () => {
  return (
    <>
<Navbar />
<main className='container d-flex justify-content-center align-items-center'></main>
<Footer/>

    </>
  )
}
