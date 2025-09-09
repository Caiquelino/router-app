import React from 'react'
import { Footer } from '../components/footer'
import { Navbar } from '../components/navbar'

export const Home = () => {
    return (
        <>
            <Navbar />
            <main className="d-flex justify-content-center align-items-center vh-100">
            <h1>Home</h1>
            </main>
            <Footer />
        </>
    )
}
