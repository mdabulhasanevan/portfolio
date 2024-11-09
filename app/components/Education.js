// components/Education.jsx
import React from 'react';

const Education = ({ education }) => {
  return (
    <section className="education-section w-full py-1">
      <h2 className="text-3xl font-bold text-center mb-4">Education</h2>
      <div className="education-list  max-w-4xl mx-auto px-4">
        {education.map((edu, index) => (
          <div key={index} className="education-card mb-6 p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">{edu.degree}</h3>
            <p className="text-gray-600">{edu.institution}</p>
            <p className="text-sm text-gray-500">
              {edu.startDate} - {edu.endDate}
            </p>
            <p className="mt-2 text-gray-700">{edu.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
