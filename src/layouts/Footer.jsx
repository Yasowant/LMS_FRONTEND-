import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.jpeg";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div>
          <div className="flex items-center mb-4">
            <img
              src={logo}
              alt="LMS Logo"
              className="rounded-full h-12 w-12 border-2 border-white object-cover"
            />

            <span className="ml-2 text-lg font-semibold">
              Learning Management System
            </span>
          </div>
          <p className="text-sm">
            Discover a world of knowledge at your fingertips. LMS offers a
            transformative learning experience with flexible, accessible, and
            industry-relevant courses tailored to your success.
          </p>
        </div>

        {/* Get Help */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Get Help</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/contact" className="hover:underline">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/articles" className="hover:underline">
                Latest Articles
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:underline">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Programs */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Programs</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/programs/art-design" className="hover:underline">
                Art & Design
              </Link>
            </li>
            <li>
              <Link to="/programs/business" className="hover:underline">
                Business
              </Link>
            </li>
            <li>
              <Link to="/programs/it-software" className="hover:underline">
                IT & Software
              </Link>
            </li>
            <li>
              <Link to="/programs/languages" className="hover:underline">
                Languages
              </Link>
            </li>
            <li>
              <Link to="/programs/programming" className="hover:underline">
                Programming
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-sm">
            Address: 123 Main Street, Anytown, Karnataka
          </p>
          <p className="text-sm">Tel: +(123) 456-7890</p>
          <p className="text-sm mb-4">Mail: agdhfdmd@cddg.in</p>
          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <Link to="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-facebook"></i>
            </Link>
            <Link to="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-github"></i>
            </Link>
            <Link to="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-google"></i>
            </Link>
            <Link to="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-xing"></i>
            </Link>
            <Link to="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-windows"></i>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
