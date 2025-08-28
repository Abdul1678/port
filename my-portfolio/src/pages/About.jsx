import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Left: Image */}
        <div className="flex-shrink-0">
          <img
            src="/Me.JPG"  // or import me from "../assets/me.jpg"
            alt="me"
            className="w-48 h-48 rounded-full shadow-lg object-cover"
          />
        </div>

        {/* Right: Text */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-lg md:text-xl leading-relaxed">
            I'm a passionate developer with experience in building modern web applications
            using React, TailwindCSS, and Node.js. I love creating clean, responsive, 
            and user-friendly designs. I like to play video games on my free time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
