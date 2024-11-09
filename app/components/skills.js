// components/Skills.jsx
import React from 'react';

const Skills = ({ skills }) => {
  return (
    <section className="skills-section w-full  py-1 ">
      <h2 className="text-3xl font-bold  text-white text-center mb-4">Skills</h2>
      <div className="skills-list max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6 bg-white rounded-xl">
        {skills.map((skillCategory, index) => (
          <div key={index} className="skill-category p-4 rounded-lg shadow-md">
            <h3 className="text-xl  text-black font-semibold mb-4">{skillCategory.category}</h3>
            <ul className="list-disc list-inside">
              {skillCategory.items.map((skill, i) => (
                <li key={i} className="text-gray-700">{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
