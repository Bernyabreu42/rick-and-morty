import Navbar from './Navbar'
import Footer from './Footer'
import React, { useContext } from 'react'


export default function Layout({ children }) {


  return (
    <main className='layout'>
      <Navbar />
      <div className="container">
        {children}
      </div>
      <Footer />
    </main>
  )
}
