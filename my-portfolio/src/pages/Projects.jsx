import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Backlog Boss",
      description:
        "A video game backlog tracker built with React, TailwindCSS, and Node.js.",
      link: "https://github.com/DefinitiveTechX23/VideoGame_Backlogger.git",
    },
    {
      title: "Donezo Project",
      description: `The backend is very simple. It connects to Supabase using Prisma (which is allowed and documented). 
There is no authentication being handled here, only Authorization. 
The frontend is a React Single Page Application that connects to Supabase Authentication and has a Supabase Client initialized.`,
      link: "https://github.com/Abdul1678/Deen.git",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">My Projects</h2>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="mb-4 text-gray-600 whitespace-pre-line">
              {project.description}
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
