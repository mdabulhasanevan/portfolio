import getData from "../data/getData";

// pages/projects.js
export default async function Projects() {
    // const projects = [
    //   { id: 1, title: "Project 1", description: "An innovative solution to optimize workflows", image: "/images/project1.jpg" },
    //   { id: 2, title: "Project 2", description: "A responsive web app for managing tasks", image: "/images/project2.jpg" },
    //   { id: 3, title: "Project 3", description: "An AI-driven platform for data analysis", image: "/images/project3.jpg" },
    // ];

    const projects=await getData.GetProjectData();
console.log("my data: " + projects);
  
    return (
      <main className="bg-gray-900 text-white min-h-screen py-10">
         <title>Project | Portfolio</title>
        <section className="container mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-center mb-10 text-blue-400">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <img src={project.photo} alt={project.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                  <p className="text-gray-400 mb-4">{project.discription}</p>
                  <a
                    href={project.link}
                    className="inline-block px-2 py-2 mt-4 text-sm font-semibold text-white bg-pink-500 rounded hover:bg-blue-400 transition-colors"
                  >
                    Live
                  </a>
                  <a
                    href={project.github}
                    className="inline-block px-2 py-2 mt-4 m-4 text-sm font-semibold text-white bg-blue-500 rounded hover:bg-blue-400 transition-colors"
                  >
                    View Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    );
  }
  