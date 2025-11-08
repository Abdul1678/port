// import React from "react";

// export default function Contact() {
//   return (
//     <section
//       id="contact"
//       className="min-h-screen flex flex-col justify-center items-center p-8 bg-gray-800"
//     >
//       <h2 className="text-5xl font-bold mb-10 text-white">Contact Me</h2>
//       <form className="flex flex-col w-full max-w-md gap-4 bg-gray-900 p-8 rounded-2xl shadow-lg">
//         <input
//           type="text"
//           placeholder="Your Name"
//           className="p-4 border border-gray-700 rounded-xl bg-gray-800 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none"
//         />
//         <input
//           type="email"
//           placeholder="Your Email"
//           className="p-4 border border-gray-700 rounded-xl bg-gray-800 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none"
//         />
//         <textarea
//           placeholder="Your Message"
//           className="p-4 border border-gray-700 rounded-xl bg-gray-800 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none"
//           rows="5"
//         ></textarea>
//         <button
//           type="submit"
//           className="bg-primary text-white p-4 rounded-xl font-semibold hover:bg-secondary transition-all duration-300 shadow-md"
//         >
//           Send Message
//         </button>
//       </form>
//     </section>
//   );
// }


import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center p-8 bg-gray-800"
    >
      <h2 className="text-5xl font-bold mb-10 text-white">Contact Me</h2>
      <form className="flex flex-col w-full max-w-md gap-4 bg-gray-900 p-8 rounded-2xl shadow-lg">
        <input
          type="text"
          placeholder="Your Name"
          className="p-4 border border-gray-700 rounded-xl bg-gray-800 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-4 border border-gray-700 rounded-xl bg-gray-800 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none"
        />
        <textarea
          placeholder="Your Message"
          className="p-4 border border-gray-700 rounded-xl bg-gray-800 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none"
          rows="5"
        ></textarea>
        <button
          type="submit"
          className="bg-primary text-white p-4 rounded-xl font-semibold hover:bg-secondary transition-all duration-300 shadow-md"
        >
          Send Message
        </button>
      </form>

      {/* Social Links Section */}
      <div className="flex gap-6 mt-10 text-white text-3xl">
        <a
          href="mailto:abdulahihussein345@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition-all duration-300"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://github.com/Abdul1678"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition-all duration-300"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/abdulahi-hussein-943309196/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition-all duration-300"
        >
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
}
