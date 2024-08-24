import React from 'react'
import Navbar from '../../components/principals/Navbar'

function Shop() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center mt-64">
        <h1 className="font-bold text-6xl mt-8 text-center justify-center text-shadow text-white">
          Próximamente...
        </h1>
      </div>

      <style jsx>{`
        .text-shadow {
          text-shadow: 2px 2px 0 #000, -2px -2px 0 #000, -2px 2px 0 #000,
            2px -2px 0 #000;
        }
      `}</style>
    </>
  )
}

export default Shop
