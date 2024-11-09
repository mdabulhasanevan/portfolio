
// app/about/page.js
import Course from "../components/course";
import Education from "../components/Education";
import Experience from "../components/Exprience";
import Skills from "../components/skills";
import education from "../data/education";
import experiences from "../data/experience";
import getData from "../data/getData";

import Image from "next/image";
import skills from "../data/skills";
import courses from "../data/course";

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
      <section className="container mx-auto px-4 lg:px-8 ">
       
        
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-10 space-y-8 lg:space-y-0">
          
          {/* Profile Image */}
          <div className="lg:w-1/3 flex flex-col justify-center  items-center">
            <Image 
              src={userData.profileImage}
              width={250}
              height={250}
              alt="Profile Picture"
              className="rounded-full shadow-lg object-cover  "
            />
             <Education education={education} />
          </div>
          
          {/* Bio Section */}
          <div className=" lg:w-2/3 text-center lg:text-left animate-fadeIn">
          <h2 className="text-4xl font-extrabold text-center mb-10 text-blue-400">About Me</h2>
            <h3 className="text-3xl font-bold mb-4 text-center">Hello, I'm {userData.name}</h3>
            <p className="text-lg text-center text-gray-300 leading-relaxed mb-6">
              {userData.bio}
            </p>
            
            <Experience experiences={experiences} />
    
     <Skills skills={skills} />
     <Course courses={courses} />
          </div>
        </div>

       

      </section>
    </main>
  );
}
