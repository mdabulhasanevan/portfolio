"use client"
// pages/index.js
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"; // Social media icons
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center">
      <section className="text-center px-4">
        <Image 
          src="/photos/evanphoto.jpg" // Replace with your profile picture in public folder
          width={150} 
          height={150} 
          alt="Profile Picture"
          className="rounded-full mx-auto mb-6"
        />
        <h1 className="text-5xl font-extrabold mb-4 animate-fadeIn">Hello, I'm <span className="text-blue-400">Md. Abul Hasan</span></h1>
        <p className="text-lg font-light mb-8 max-w-md mx-auto leading-relaxed animate-fadeIn">
          A passionate developer focused on building impactful web applications.
        </p>
        
        <div className="flex justify-center space-x-6 mb-8 animate-fadeIn">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <FaGithub size={30} />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <FaLinkedin size={30} />
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <FaTwitter size={30} />
          </a>
        </div>

        <a
          href="/project"
          className="inline-block px-6 py-3 bg-blue-500 rounded-lg text-lg font-semibold hover:bg-blue-400 transition-colors animate-fadeIn"
        >
          View My Work
        </a>
      </section>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }
      `}</style>
    </main>
  );
}
