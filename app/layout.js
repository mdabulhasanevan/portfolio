"use-client"
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Head from "next/head";
// import { NextTopLoader } from 'nextjs-toploader';



const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Portfolio Site",
  description: "this is a Portfolio page",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
        <link
  rel="icon"
  href="http://localhost:3000/_next/image?url=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F175601100%3Fv%3D4&w=384&q=75"
  type="image/<generated>"
  sizes="<generated>"
/>
      <body>
      {/* <NextTopLoader /> */}
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
