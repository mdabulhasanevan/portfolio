"use client"
import React, { useRef } from 'react';
import Education from './Education';
import education from '../data/education';
import Experience from './Exprience';
import experiences from '../data/experience';
import Skills from './skills';
import skills from '../data/skills';
import Course from './course';
import courses from '../data/course';
import Image from 'next/image';
import Download from './Download';




const AboutComponent = ({userData}) => {
     // Reference for the page content
  const contentRef = useRef();
    return (
        <div>
            <section className="container mx-auto px-4 lg:px-8 ">

                <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-5 space-y-4 lg:space-y-0">
                   
                    {/* Profile Image */}
                    <div className="lg:w-1/3 flex flex-col justify-center bg-gray-800 items-center" ref={contentRef}>
                        {/* <h2 className="text-4xl font-extrabold text-center mb-10 text-blue-400">About Me</h2> */}
                        {/* <Download contentRef={contentRef}/> */}
                        <Image
                            src={userData.profileImage}
                            width={250}
                            height={250}
                            alt="Profile Picture"
                            className="rounded-full shadow-lg object-cover my-3  "
                        />
                        <h3 className="text-3xl font-bold mb-4 text-center"> {userData.name}</h3>
                        <p className="text-lg text-center text-gray-300 leading-relaxed mb-6">
                            {userData.bio}
                        </p>
                        <Education education={education} />
                    </div>

                    {/* Bio Section */}
                    <div className=" lg:w-2/3 text-center lg:text-left animate-fadeIn">



                        <Experience experiences={experiences} />

                        <Skills skills={skills} />
                        <Course courses={courses} />
                    </div>
                </div>



            </section>
        </div>
    );
};

export default AboutComponent;