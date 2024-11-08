// pages/about.js
import Image from "next/image";

export default function About() {
  return (
    <main className="bg-gray-900 text-white min-h-screen py-10">
      <section className="container mx-auto px-4 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center mb-10 text-blue-400">About Me</h2>
        
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-10 space-y-8 lg:space-y-0">
          
          {/* Profile Image */}
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-start">
            <Image 
              src="/photos/evanphoto.jpg" // Make sure the path is correct
              width={300}
              height={300}
              alt="Profile Picture"
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
          
          {/* Bio Section */}
          <div className="w-full lg:w-2/3 text-center lg:text-left">
            <h3 className="text-3xl font-bold mb-4">Hello, I'm [Your Name]</h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I am a passionate software developer with a focus on creating impactful web applications. With a strong background in frontend and backend development, I enjoy turning complex problems into simple, elegant solutions. My goal is to continue learning and expanding my skills to create software that enhances user experiences and brings ideas to life.
            </p>
            
            <h4 className="text-2xl font-semibold text-blue-400 mb-4">Skills & Expertise</h4>
            <ul className="text-gray-300 space-y-2">
              <li>💻 Proficient in JavaScript, TypeScript, React, and Next.js</li>
              <li>🌐 Skilled in CSS, Tailwind CSS, and responsive design</li>
              <li>🔧 Experience with Node.js, Express, and MongoDB</li>
              <li>🚀 Passionate about user-centered design and creating seamless experiences</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
