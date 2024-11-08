
// app/about/page.js
import getData from "../data/getData";

import Image from "next/image";

export default async function About() {
 
const user=await getData.GetUserData();
console.log("my data: " + user);

  const userData = {
    name: user.name,
    bio: user.bio,
    skills: user.skills,
    profileImage: user.profileImage,
  };

  console.log(userData)

  return (
    <main className="bg-gray-900 text-white min-h-screen py-10">
      <section className="container mx-auto px-4 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center mb-10 text-blue-400">About Me</h2>
        
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-10 space-y-8 lg:space-y-0">
          
          {/* Profile Image */}
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-start">
            <Image 
              src={userData.profileImage}
              width={300}
              height={300}
              alt="Profile Picture"
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
          
          {/* Bio Section */}
          <div className="w-full lg:w-2/3 text-center lg:text-left">
            <h3 className="text-3xl font-bold mb-4">Hello, I'm {userData.name}</h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              {userData.bio}
            </p>
            
            <h4 className="text-2xl font-semibold text-blue-400 mb-4">Skills & Expertise</h4>
            <ol>
        {userData.skills.map((skill) => (
          <li className="text-amber-400" key={skill}>{skill}</li>
        ))}
      </ol>
          </div>
        </div>
      </section>
    </main>
  );
}
