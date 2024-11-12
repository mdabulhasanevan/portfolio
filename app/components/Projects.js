import React from 'react';

const projects = ({ projects }) => {
    return (
        <section className="projects-section w-full  py-1 ">
            <h2 className="text-3xl font-bold  text-white text-center mb-4">Projects</h2>
            <div className="skills-list  px-0 mx-4 grid grid-cols-1 md:grid-cols-3 gap-2 bg-gray-800  rounded-xl">
                {projects.map((Project, index) => (
                    <div key={index} className="skill-category p-4 border-spacing-1 transform hover:scale-105 transition-transform duration-300 text-white border-gray-100 rounded-lg shadow-md">
                        <h3 className="text-xl  font-semibold mb-4"> <a href={Project.link}>{Project.name}</a></h3>

                    </div>
                ))}
                 
            </div>
            
           
           
        </section>
    );
};

export default projects;