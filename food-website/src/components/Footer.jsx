import React from 'react'


    
const Footer = () => {
  const instagramImages = [
    "/images/twitter.png",
    "/images/facebook.png",
    "/images/insta.png",
    "/images/git.png",
  ];

  return (
    <>
    <footer className="bg-gray-800 text-white py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div>
          <h2 className="text-xl font-bold mb-2"><img src="/images/japan.png" alt="" /> Bistro Bliss</h2>
          <p className="text-sm mb-4">
            In the new era of technology we look to the future with certainty and pride for our company and.
          </p>
          <div className="flex gap-3 mt-2">
            <a href="#" className="hover:text-red-400"><i className="fab fa-twitter">T</i></a>
            <a href="#" className="hover:text-red-400"><i className="fab fa-facebook">F</i></a>
            <a href="#" className="hover:text-red-400"><i className="fab fa-instagram">I</i></a>
            <a href="#" className="hover:text-red-400"><i className="fab fa-pinterest">P</i></a>
          </div>
        </div>

        {/* Pages */}
        <div>
          <h3 className="font-semibold mb-3">Pages</h3>
          <ul className="text-sm space-y-2">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Delivery</a></li>
          </ul>
        </div>

        {/* Utility Pages */}
        <div>
          <h3 className="font-semibold mb-3">Utility Pages</h3>
          <ul className="text-sm space-y-2">
            <li><a href="#">Start Here</a></li>
            <li><a href="#">Styleguide</a></li>
            <li><a href="#">Password Protected</a></li>
            <li><a href="#">404 Not Found</a></li>
            <li><a href="#">Licenses</a></li>
            <li><a href="#">Changelog</a></li>
            <li><a href="#">View More</a></li>
          </ul>
        </div>

        {/* Instagram Grid */}
        <div>
          <h3 className="font-semibold mb-3">Follow Us On Instagram</h3>
          <div className="grid grid-cols-2 gap-2">
            {instagramImages.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Instagram ${index + 1}`}
                className="object-cover rounded"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="text-center text-gray-400 text-sm mt-10 border-t border-gray-700 pt-4">
        © 2025 YaksTech. All Rights Reserved
      </div>
    </footer>
    </>
  );
};

export default Footer;