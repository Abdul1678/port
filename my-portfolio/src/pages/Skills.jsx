import React from "react";

const skills = [
  { name: "React", link: "https://react.dev/" },
  { name: "TailwindCSS", link: "https://tailwindcss.com/docs" },
  { name: "JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { name: "Node.js", link: "https://nodejs.org/en/docs" },
  { name: "Prisma", link: "https://www.prisma.io/docs" },
  { name: "Express", link: "https://expressjs.com/" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col justify-center items-center p-8 bg-gray-900"
    >
      <h2 className="text-5xl font-bold mb-10 text-white">Skills</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {skills.map((skill) => (
          <a
            key={skill.name}
            href={skill.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative px-6 py-3 rounded-2xl font-semibold text-white bg-white/10 backdrop-blur-sm hover:scale-110 transform transition duration-300 shadow-lg before:absolute before:-inset-1 before:rounded-2xl before:bg-gradient-to-r before:from-purple-500 before:via-pink-500 before:to-red-500 before:blur-xl before:opacity-0 hover:before:opacity-100 before:transition-opacity hover:translate-y-[-2px]"
          >
            {skill.name}
          </a>
        ))}
      </div>
    </section>
  );
}
