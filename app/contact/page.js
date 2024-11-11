"use client"
import { useState } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaPhoneSquare } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import ContactComponent from '../components/contactComponent';
import ContactForm from '../components/ContactForm';


function Contact() {

    return (
        <main className="bg-gray-900 text-white min-h-screen py-10">
            <div className='flex flex-col px-5 m-5   md:flex-row md:space-x-'>
            <div className='flex-1 p-5 mt-5'>
            <h2 className="font-bold text-white text-center p-3">My Contact Detail</h2>

                <ContactComponent />
                </div>
                <div className="flex-1">
                <ContactForm />
                </div>
               
            </div>
        </main>
    );
}
export default Contact;
