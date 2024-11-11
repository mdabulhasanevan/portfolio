"use client"
import { useState } from 'react';


 function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('');
    const [isLoading, setIsLoading] = useState(false);  // Track loading state

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Validate form data before submission
    const validateForm = () => {
        const { name, email, message } = formData;
        if (!name || !email || !message) {
            setStatus('All fields are required.');
            return false;
        }

        // Email regex for basic validation
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            setStatus('Please enter a valid email address.');
            return false;
        }

        return true;
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate form before submission
        if (!validateForm()) {
            return;
        }

        const { name, email, message } = formData;

        // Set loading state to true while sending the message
        setIsLoading(true);
        setStatus('Sending your message...');

        try {
            const response = await fetch('/api/sendEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, message }),
            });

            const result = await response.json();

            if (response.ok) {
               setFormData({
                    name: '',
                    email: '',
                    message: ''
                });
                setStatus('Message sent successfully!');
            } else {
                setStatus(result.error || 'Failed to send message.');
            }
        } catch (error) {
            setStatus('Error sending message. Please try again.');
        } finally {
            // Set loading state to false after submission
            setIsLoading(false);
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
                    <h2 className="font-bold text-center text-white p-3">Drop Message</h2>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="p-2 border border-gray-300 rounded mb-2"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="p-2 border border-gray-300 rounded mb-2"
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        className="p-2 border border-gray-300 rounded mb-2"
                        rows="5"
                    ></textarea>
                      <button
                type="submit"
                className="p-2 bg-blue-500 text-white rounded"
                disabled={isLoading}  // Disable button while loading
            >
                {isLoading ? (
                    <div className="w-5 h-5 border-4 border-t-4 border-red-500 rounded-full animate-spin mx-auto"></div>  // Tailwind Spinner
                ) : (
                    'Send Message'
                )}
            </button>
                    <p className="text-white">{status}</p>
                </form>

            </div>
        </main>
    );
}
export default ContactForm;
