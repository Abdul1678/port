import React from "react";

const Skills = () => {
  const skills = [
    {
      name: "React",
      link: "https://react.dev/",
    },
    {
      name: "TailwindCSS",
      link: "https://tailwindcss.com/docs",
    },
    {
      name: "Node.js",
      link: "https://nodejs.org/en/docs",
    },
    {
      name: "Prisma",
      link: "https://www.prisma.io/docs",
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">My Skills</h2>

      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 text-center">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
            <a
              href={skill.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Read more →
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
