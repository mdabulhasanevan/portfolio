
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
import Download from "../components/Download";


import AboutComponent from '../components/AboutComponent';


export default async  function About() {
 
 // const contentRef = useRef();
 

const user=await getData.GetUserData();
console.log("my data: " + user);
const education=await getData.GetEducationData();
console.log("my data: " + education);
const course=await getData.GetCourseData();
console.log("my data: " + course);
const skill=await getData.GetSkillsData();
console.log("my data: " + skill);
const experience=await getData.GetExperienceData();
console.log("my data: " + experience);


  const userData = {
    name: user.name,
    bio: user.bio,
    skills: user.skills,
    profileImage: user.profileImage,
  };

  console.log(userData)

  return (
    <main className="bg-gray-900 text-white min-h-screen py-10">
      <title>About | Portfolio</title>
   <AboutComponent userData={userData} education={education} course={course} skill={skill} experience={experience}/>

    </main>
  );
}
