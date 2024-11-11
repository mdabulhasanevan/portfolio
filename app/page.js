
// pages/index.js
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Image from "next/image";
import getData from "./data/getData";
import UserProfile from "./components/UserProfile";

import courses from "./data/course";
import TextRain from "./components/TextRain";

export default async function Home() {
  const user = await getData.GetUserData(); // Fetch data server-side
  const skill=await getData.GetSkillsWithoutCategoryData();
  console.log("my data: " + skill);
  return (
    <main className="relative z-10 bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center">
      <title>Portfolio | Home</title>
      <div className=" w-full h-full z-0">
        <TextRain words={skill} text="Tailwind Rain Effect" />
      </div>
     
        <UserProfile user={user} className="relative z-20" />

    </main>
  );
}
