// components/Skills.jsx
import React from 'react';

const Skills = ({ skills }) => {
  return (
    <section className="skills-section w-full  py-1 ">
      <h2 className="text-3xl font-bold  text-white text-center mb-4">Skills</h2>
      <div className="skills-list  px-0 mx-4 grid grid-cols-1 md:grid-cols-3 gap-2 bg-gray-800  rounded-xl">
        {skills.map((skillCategory, index) => (
          <div key={index} className="skill-category p-4 border-spacing-1 transform hover:scale-105 transition-transform duration-300 text-white border-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl  font-semibold mb-4">{skillCategory.category}</h3>
            <ul className="list-disc list-inside">
              {skillCategory.items.map((skill, i) => (
                <li key={i} className="text-orange-400 text-left pl-3">{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
