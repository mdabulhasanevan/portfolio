"use client"

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="bg-gray-900 text-white p-4 fixed top-0 w-full z-50 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/">
            <h1 className="text-2xl font-bold">My Portfolio</h1>
          </Link>
          <div className="md:hidden">
            {/* Hamburger Icon for small screens */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
          {/* Navigation links for medium and larger screens */}
          <ul className="hidden md:flex space-x-4">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/project">Projects</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        {/* Dropdown menu for small screens */}
        {isOpen && (
          <ul className="md:hidden bg-gray-800 text-white p-4 space-y-2">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/project">Projects</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        )}
      </nav>
      <div className="pt-8">
        {/* Add extra padding here to avoid content being hidden behind the fixed navbar */}
      </div>
    </div>
  );
}
