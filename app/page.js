// pages/index.js
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Image from "next/image";
import getData from "./data/getData";
import UserProfile from "./components/UserProfile";

import courses from "./data/course";

export default async function Home() {
  const user = await getData.GetUserData(); // Fetch data server-side

  return (
    <main className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center">
    <title>Portfolio | Home</title>
     <UserProfile user={user} />

    </main>
  );
}
