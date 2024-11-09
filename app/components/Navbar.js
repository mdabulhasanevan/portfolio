// components/Navbar.js
import Link from 'next/link';

export default function Navbar() {
  return (

    <div>
      <nav className="bg-gray-900 text-white p-4 fixed top-0 w-full z-50 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/">
            <h1 className="text-2xl font-bold">My Portfolio</h1>
          </Link>
          <ul className="flex space-x-4">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/project">Projects</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
      </nav>
      <div className="pt-16">
        {/* Add extra padding here to avoid content being hidden behind the fixed navbar */}
      </div>

    </div>
  );
}
