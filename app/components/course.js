// components/Course.jsx
import React from 'react';

const Course = ({ courses }) => {
  return (
    <section className="course-section w-full py-1">
      <h2 className="text-3xl font-bold text-center text-white mb-2">Courses</h2>
      <div className="course-list max-w-4xl mx-auto px-4">
        {courses.map((course, index) => (
          <div key={index} className="course-card mb-6 p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-black">{course.title}</h3>
            <p className="text-gray-600">{course.platform}</p>
            <p className="text-sm text-gray-500">
              Completed: {course.completionDate}
            </p>
            <p className="mt-2 text-gray-700">{course.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Course;
