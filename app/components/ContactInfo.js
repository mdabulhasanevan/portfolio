import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaPhoneSquare } from 'react-icons/fa';

const ContactInfo = () => {
    return (
        <div>
            <div className="p-5 ">
            <div>
               
                <div className="flex items-center space-x-2 mb-2">
                    <FaPhoneSquare className="text-blue-500" />
                    <a href="tel:01737013139" className="text-blue-500 hover:underline">
                        Mobile: 01737013139
                    </a>
                </div>

                <div className="flex items-center space-x-2 mb-2">
                    <FaEnvelope className="text-blue-500" />
                    <a href="mailto:evan.doict@gmail.com" className="text-blue-500 hover:underline">
                        Email: evan.doict@gmail.com
                    </a>
                </div>

                <div className="flex items-center space-x-2 mb-2">
                    <FaLinkedin className="text-blue-500" />
                    <a href="https://www.linkedin.com/in/abulhasanevan/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                        LinkedIn: https://www.linkedin.com/in/abulhasanevan/
                    </a>
                </div>

                <div className="flex items-center space-x-2">
                    <FaGithub className="text-blue-500" />
                    <a href="https://github.com/mdabulhasanevan" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                        GitHub: https://github.com/mdabulhasanevan
                    </a>
                </div>
            </div>
        </div>
        </div>
    );
};

export default ContactInfo;