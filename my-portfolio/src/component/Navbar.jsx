import React, { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-gray-900/80 backdrop-blur-md shadow-md p-4 flex justify-between items-center z-50">
      <h1 className="text-2xl font-bold text-white">My Portfolio</h1>
      <ul className="hidden md:flex space-x-6">
        {["Home", "About", "Skills", "Projects", "Contact"].map((section) => (
          <li key={section}>
            <a
              href={`#${section.toLowerCase()}`}
              className="hover:text-primary transition-colors duration-300"
            >
              {section}
            </a>
          </li>
        ))}
      </ul>
      {/* Mobile toggle */}
      <div className="md:hidden text-white cursor-pointer" onClick={() => setOpen(!open)}>
        ☰
      </div>
      {open && (
        <ul className="absolute top-16 right-4 bg-gray-800 p-4 rounded-md flex flex-col gap-4 md:hidden">
          {["Home", "About", "Skills", "Projects", "Contact"].map((section) => (
            <li key={section}>
              <a
                href={`#${section.toLowerCase()}`}
                className="hover:text-primary transition-colors duration-300"
              >
                {section}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
