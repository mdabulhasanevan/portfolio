"use client"
import { useState } from 'react';

export default function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        message: '',
    });

    // Validate form fields
    const validateForm = () => {
        const newErrors = {};
        let isValid = true;

        if (!name) {
            newErrors.name = 'Name is required';
            isValid = false;
        }

        if (!email) {
            newErrors.email = 'Email is required';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Email is invalid';
            isValid = false;
        }

        if (!message) {
            newErrors.message = 'Message is required';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            // If form is valid, send the data (e.g., to your API endpoint)
            console.log('Form submitted:', { name, email, message });

            // Reset form after submission
            setName('');
            setEmail('');
            setMessage('');
            setErrors({});
        }
    };

    return (
        <main className="bg-gray-900 text-white min-h-screen py-10">

            <div className='flex flex-col px-5 m-5   md:flex-row md:space-x-'>
                <div>

                    <div className='flex-1 p-5 mt-5'>
                        <h2 className="font-bold text-center p-3">My Contact Detail</h2>
                        <div className="p-5 ">
                            Mobile:01737013139 <br></br>
                            Email:evan.doict@gmail.com <br></br>
                            Linkedin: https://www.linkedin.com/in/abulhasanevan/ <br></br>
                            GitHub: https://github.com/mdabulhasanevan <br></br>
                        </div>
                    </div>
                </div>
                <form className="flex flex-1 flex-col p-5 mt-5 text-black" onSubmit={handleSubmit}>
                    <h2 className="font-bold text-center text-white p-3">Contact with Email</h2>

                    <div className="mb-3">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="p-2 border border-gray-300 rounded w-full"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                    </div>
                    <div className="mb-3">
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="p-2 border border-gray-300 rounded w-full"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                    </div>
                    <div className="mb-3">
                        <textarea
                            placeholder="Your Message"
                            className="p-2 border border-gray-300 rounded w-full"
                            rows="5"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                        {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                    </div>
                    <button type="submit" className="p-2 bg-blue-500 text-white rounded">
                        Send Message
                    </button>
                </form>

            </div>
        </main>
    );
}

