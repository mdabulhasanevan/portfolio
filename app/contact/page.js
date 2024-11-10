import React from 'react';
import AboutComponent from './../components/AboutComponent';

const page = () => {
    return (
        <div>
<h2 className="text-3xl font-bold mb-4">Contact Me</h2>
            <div className='flex w-full justify-center items-center '>
                <div className='w-2/5'>
                <h2 className="font-bold">My Contact Detail</h2>
                
                Mobile:01737013139
                Email:evan.doict@gmail.AboutComponent
                Linkedin: https://www.linkedin.com/in/abulhasanevan/
                GitHub: https://github.com/mdabulhasanevan
                </div>
                <form className="flex flex-col w-1/2 space-y-4">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="p-2 border border-gray-300 rounded"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="p-2 border border-gray-300 rounded"
                    />
                    <textarea
                        placeholder="Your Message"
                        className="p-2 border border-gray-300 rounded"
                        rows="5"
                    ></textarea>
                    <button type="submit" className="p-2 bg-blue-500 text-white rounded">
                        Send Message
                    </button>
                </form>
            </div>
        </div>

    );
};

export default page;