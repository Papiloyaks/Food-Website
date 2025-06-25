import React from 'react'
import BgImage from '../assets/images/bgimage.png'; // Adjust the path as necessary

function HomePage() {
  return (
    <>
      <div
      className="bg-cover bg-center min-h-screen flex items-center justify-center px-4 w-full mt-16"
    style={{ backgroundImage: `url(${BgImage})` }}
    >

      <div className="p-5 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
          Best food for <br className="hidden md:block " /> your taste
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          Discover delectable cuisine and unforgettable moments in our welcoming, culinary haven.
        </p>
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <button className="bg-rose-600 text-white px-6 py-3 rounded-full hover:bg-rose-700 transition">
            Book A Table
          </button>
          <button className="border border-gray-600 text-gray-800 px-6 py-3 rounded-full hover:bg-gray-100 transition">
            Explore Menu
          </button>
        </div>
      </div>
    </div>
    

    </>
  )
}

export default HomePage