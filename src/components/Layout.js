import Navbar from './Navbar'
import Footer from './Footer'
import React, { useContext } from 'react'


export default function Layout({ children }) {


  return (
    <main className="container">
      <Navbar />
      <div className='container_center'>
        {children}
      </div>
      <Footer />
    </main>
  )
}
