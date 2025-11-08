import React from "react";

export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
    >
      <h1 className="text-6xl font-bold mb-4 text-white animate-float">Hi, I'm Abdulahi Hussein</h1>
      <p className="text-2xl mb-8 text-gray-300">
        A Passionate Web Developer & Designer
      </p>
      <a
        href="#projects"
        className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-secondary transition-all duration-300 shadow-lg"
      >
        View My Work
      </a>
    </section>
  );
}
