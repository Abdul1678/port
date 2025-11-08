// 

// import React from "react";

// const projects = [
//   { name: "Backlog Boss", description: "Game backlog tracker app.", link: "#" },
//   { name: "Portfolio Website", description: "Modern portfolio built with React & Tailwind.", link: "#" },
// ];

// export default function Projects() {
//   return (
//     <section
//       id="projects"
//       className="min-h-screen flex flex-col justify-center items-center p-8 bg-gray-900"
//     >
//       <h2 className="text-5xl font-bold mb-10 text-white">Projects</h2>
//       <div className="grid md:grid-cols-2 gap-8 w-full max-w-6xl">
//         {projects.map((project) => (
//           <div
//             key={project.name}
//             className="relative bg-gray-800 rounded-xl shadow-xl p-6 hover:scale-105 transform transition duration-300"
//           >
//             <h3 className="text-2xl font-bold mb-2 text-white">{project.name}</h3>
//             <p className="text-gray-300 mb-4">{project.description}</p>
//             <a
//               href={project.link}
//               className="text-primary font-semibold hover:underline"
//             >
//               View Project
//             </a>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
import React from "react";

const projects = [
  
  {
    name: "Donezo",
    description: "The project consist with backend which also connect to supabase using Prisma and The frontend is a single React Paget connects to Supabase via it's Authentication service and does have a Supabase Client initialized.",
    link: "https://github.com/Abdul1678/Deen.git"
  },
  {
    name: "Video Game Backlogger",
    description: "Full‑stack game backlog app (Vite frontend + Express + Prisma backend).",
    link: "https://github.com/DefinitiveTechX23/VideoGame_Backlogger.git"
  },
  {
    name: "Pokedex",
    description: "The project consist with backend which also connect to supabase using Prisma and The frontend is a single React Paget connects to Supabase via it's Authentication service and does have a Supabase Client initialized.",
    link: "https://github.com/Abdul1678/Hus_Ath_pokedex.git"
    
  },
    

];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center p-8 bg-gray-900"
    >
      <h2 className="text-5xl font-bold mb-10 text-white">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8 w-full max-w-6xl">
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative bg-gray-800 rounded-xl shadow-xl p-6 hover:scale-105 transform transition duration-300 block"
          >
            <h3 className="text-2xl font-bold mb-2 text-white">{project.name}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <span className="text-primary font-semibold hover:underline">View Project</span>
          </a>
        ))}
      </div>
    </section>
  );
}
