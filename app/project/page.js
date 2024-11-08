// pages/projects.js
export default function Projects() {
    const projects = [
      { id: 1, title: "Project 1", description: "Description of project 1" },
      { id: 2, title: "Project 2", description: "Description of project 2" },
      { id: 3, title: "Project 3", description: "Description of project 3" },
    ];
  
    return (
      <div className="container mx-auto p-8">
        <h2 className="text-3xl font-bold mb-4">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map(project => (
            <div key={project.id} className="bg-gray-700 text-white p-4 rounded">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  