// components/UserProfile.js
"use client"; // Mark as a Client Component

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Image from "next/image";

export default function UserProfile({ user }) {
  return (
    <section className="text-center px-3 mt-8 ">
     
      <Image 
        src={user.profileImage} // Profile picture from public folder
        width={150} 
        height={150} 
        alt="Profile Picture"
        className="rounded-full mx-auto mb-6"
      />
      <h1 className="text-4xl font-extrabold mb-4 animate-fadeIn">
        Hello, I am <span className="text-blue-400">{user.name}</span>
      </h1>
      <p className="text-lg font-light mb-6 max-w-md mx-auto leading-relaxed animate-fadeIn">
      {user.description}
      </p>

      <div className="flex justify-center space-x-6 mb-3 animate-fadeIn">
        <a href={user.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
          <FaGithub size={30} />
        </a>
        <a href={user.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
          <FaLinkedin size={30} />
        </a>
        <a href={user.x} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
          <FaTwitter size={30} />
        </a>
      </div>
      <a
        href="/about"
        className="inline-block px-6 py-2 my-2 mx-2 bg-sky-500 rounded-lg text-lg font-semibold hover:bg-blue-400 transition-colors animate-fadeIn"
      >
        My Details
      </a>
      <a
        href="/project"
        className="inline-block px-6 py-2 my-2 mx-2 bg-blue-500 rounded-lg text-lg font-semibold hover:bg-blue-400 transition-colors animate-fadeIn"
      >
        View My Projects
      </a>

      <style jsx>{`
       
      `}</style>
    </section>
  );
}
