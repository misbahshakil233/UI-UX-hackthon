"use client";

import React, { useState } from "react";
import {
  FiSearch,
  FiShoppingCart,
  FiHeart,
  FiChevronDown,
} from "react-icons/fi";
import { FaUser } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white fixed w-full z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 md:px-6">
        {/* Logo */}
        <div className="flex items-center space-x-2 text-3xl font-bold">
          <span className="text-black">Bandage</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <a
            href="/"
            className="text-gray-500 font-bold text-lg hover:text-primary-blue"
          >
            Home
          </a>
          <div className="relative group">
            <button className="flex items-center space-x-1 text-black text-xl hover:text-primary-blue transition">
              <span>Shop</span>
              <FiChevronDown />
            </button>
            <div className="absolute left-0 hidden w-40 py-2 mt-1 bg-white rounded-lg shadow-lg text-gray-900 group-hover:block">
              <a href="#shop1" className="block px-4 py-2 hover:bg-gray-100">
                Shop 1
              </a>
              <a href="#shop2" className="block px-4 py-2 hover:bg-gray-100">
                Shop 2
              </a>
            </div>
          </div>
          <a
            href="/about"
            className="text-gray-500 font-bold text-lg hover:text-primary-blue"
          >
            About
          </a>
          <a
            href="/blog"
            className="text-gray-500 font-bold text-lg hover:text-primary-blue"
          >
            Blog
          </a>
          <a
            href="/contact"
            className="text-gray-500 font-bold text-lg hover:text-primary-blue"
          >
            Contact
          </a>
          <a
            href="/moreproduct"
            className="text-gray-500 font-bold text-lg hover:text-primary-blue"
          >
            Pages
          </a>
          <a
            href="/pricing"
            className="text-gray-500 font-bold text-lg hover:text-primary-blue"
          >
            Pricing
          </a>
        </div>

        {/* Right Section */}
        <div className="hidden md:flex items-center space-x-6">
          {/* Login */}
          <div className="flex items-center space-x-2 text-primary-blue hover:text-primary-blue transition">
            <FaUser size={20} />
            <span>Login</span>/<span>Register</span>
          </div>
          {/* Search */}
          <FiSearch className="text-primary-blue" size={20} />
          {/* Cart */}
          <div className="flex items-center text-gray-500 hover:text-primary-blue transition">
            <FiShoppingCart className="text-primary-blue" size={20} />
            <span className="ml-1 text-primary-blue font-bold">1</span>
          </div>
          {/* Wishlist */}
          <div className="flex items-center text-gray-500 hover:text-primary-blue transition">
            <FiHeart className="text-primary-blue" size={20} />
            <span className="ml-1 text-primary-blue font-bold">1</span>
          </div>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="focus:outline-none text-2xl"
          >
            {isMenuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white text-center py-4 space-y-2 shadow-lg">
          <a
            href="home"
            className="block py-2 text-gray-500 font-bold hover:text-primary-blue"
          >
            Home
          </a>
          <div className="relative">
            <button className="flex items-center justify-center space-x-1 text-gray-500 font-bold hover:text-primary-blue transition w-full">
              <span>Shop</span>
              <FiChevronDown />
            </button>
            <div className="bg-white rounded-lg shadow-md py-2">
              <a href="#shop1" className="block px-4 py-2 hover:bg-gray-100">
                Shop 1
              </a>
              <a href="#shop2" className="block px-4 py-2 hover:bg-gray-100">
                Shop 2
              </a>
            </div>
          </div>
          <a
            href="/about"
            className="block py-2 text-gray-500 font-bold hover:text-primary-blue"
          >
            About
          </a>
          <a
            href="/blog"
            className="block py-2 text-gray-500 font-bold hover:text-primary-blue"
          >
            Blog
          </a>
          <a
            href="/contact"
            className="block py-2 text-gray-500 font-bold hover:text-primary-blue"
          >
            Contact
          </a>
          <a
            href="/pages"
            className="block py-2 text-gray-500 font-bold hover:text-primary-blue"
          >
            Pages
          </a>
          <a
            href="/pricing"
            className="block py-2 text-gray-500 font-bold hover:text-primary-blue"
          >
            Pricing
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
