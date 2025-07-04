import React from 'react'
import MenuSection from './MenuSection'
import HeroSection from './HeroSection'
import ServicesSection from './ServicesSection'
import DeliverySection from './DeliverySection'
import Testimonial from './Testimonial'

function HomePage() {
  return (
    <>
      <div
      className="bg-cover min-h-screen sm:w-20 md:w-full flex items-center justify-center px-4 w-full mt-16"
     style={{ backgroundImage: "url('/images/bgimage.png')" }}
    >

      <div className="p-5 text-center">
        <h1 className="text-4xl md:text-5xl font-[600] lg:text-gray-700 text-white leading-tight font-serif">
          Best food for <br className="hidden md:block " /> your taste
        </h1>
        <p className="mt-4 text-lg text-gray-800 font-serif">
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
    <MenuSection />
    <HeroSection/>
    <ServicesSection/>
    <DeliverySection/>
    <Testimonial/>

    </>
  )
}

export default HomePage