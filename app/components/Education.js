// components/Education.jsx
import React from 'react';

const Education = ({ education }) => {
  return (
    <section className="education-section w-full py-1">
      <h2 className="text-3xl font-bold text-center mb-2">Education</h2>
      <div className="education-list  max-w-4xl mx-auto px-4">
        {education.map((edu, index) => (
          <div key={index} className="education-card mb-1 p-4  rounded-lg shadow-md">
            <h3 className="text-xl text-yellow-400 font-semibold">{edu.degree}</h3>
            <p className="text-orange-500">{edu.institution}</p>
            <p className="text-sm text-pink-500">
              {edu.startDate} - {edu.endDate}
            </p>
            <p className="mt-2 text-white-700">{edu.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
