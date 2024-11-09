// components/Experience.jsx
import React from 'react';

const Experience = ({ experiences }) => {
  return (
    <section className="experience-section w-full py-1">
      <h2 className="text-3xl font-bold text-center mb-4">Experience</h2>
      <div className="experience-list max-w-4xl mx-auto px-4">
        {experiences.map((experience, index) => (
          <div key={index} className="experience-card mb-6 p-4 bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-xl text-white-950 font-semibold">{experience.position}</h3>
            <p className="text-orange-500">{experience.company}</p>
            <p className="text-sm ">
              {experience.startDate} - {experience.endDate}
            </p>
            <p className="mt-2 ">{experience.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
