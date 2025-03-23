import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"; // Import Icons


const App = () => {
  return (
    <div>
      <header>My Portfolio</header>

      {/* Hero Section */}
      <section className="text-center text-gray-800">
        <h1 className="text-5xl font-bold">
          Hi, I'm <span className="text-blue-500">Kalpesh Parmar</span>
        </h1>
        <p className="mt-3 text-lg">Web Developer | Application Developer</p>
        <a
          href="/KALPESH RESUME.pdf"
          download="Kalpesh_Parmar_Resume.pdf"
          className="glow-button mt-5"
        >
          Download Resume
        </a>
      </section>

      {/* About Section */}
      <section>
        <h2 className="text-4xl font-bold text-blue-600">About Me</h2>
        <p className="mt-4 text-lg text-gray-700">
          I am Kalpesh Parmar, a passionate web developer specializing in modern
          frameworks like React, JavaScript, and AI-driven solutions.
        </p>
      </section>

      {/* Skills Section */}
      <section className="bg-gray-100">
        <h2 className="text-4xl font-bold">Skills</h2>
        <div className="mt-6">
          {[
            "React",
            "JavaScript",
            "HTML",
            "CSS",
            "Bootstrap",
            "MongoDB",
            "AI Integration",
          ].map((skill) => (
            <span key={skill} className="skill-box">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section>
        <h2 className="text-4xl font-bold text-blue-600">Projects</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              name: "LerniFy-Smart Learning AI",
              desc: "An AI-powered study assistant using Gemini API",
              link: "https://github.com/KrutikNaina/AI_Project.git",
            },
            {
              name: "Google Authentication",
              desc: "A secure Google authentication system using React and Firebase Authentication with easy setup, protected routes, and user session management. ",
              link: "https://github.com/parmarkalpesh/google-authentication.git",
            },
            {
              name: "ChatBot",
              desc: " A simple AI chatbot powered by Google Gemini API and Gradio UI.",
              link: "https://github.com/parmarkalpesh/Chatbot-Gemini.git",
            },
          ].map((project, index) => (
            <div key={index} className="project-card">
              <h3 className="text-2xl font-semibold">{project.name}</h3>
              <p className="mt-3">{project.desc}</p>
              <a
                href={project.link}
                className="text-blue-600 font-semibold mt-3 inline-block"
              >
                View More →
              </a>
            </div>
          ))}
        </div>
      </section>
{/* Contact Button */}
<section id="contact" className="contact-container">
  <div className="contact-form text-center">
    <a
      href="https://docs.google.com/forms/d/e/1FAIpQLSda3yS1bUhxiZk5ABf6RvVAQ06nr9R8EpX2z6nJkg_pMAx00A/viewform?usp=dialog"
      target="_blank"
      rel="noopener noreferrer"
      className="contact-button"
    >
      Contact Me
    </a>
  </div>
</section>



{/* Footer */}
<footer className="footer">
  <div className="social-icons">
    <a href="https://github.com/parmarkalpesh" target="_blank" rel="noopener noreferrer">
      <FaGithub className="icon" />
    </a>
    <a href="https://www.linkedin.com/in/parmar-kalpesh" target="_blank" rel="noopener noreferrer">
      <FaLinkedin className="icon" />
    </a>
    <a href="mailto:parmarkalpesh436@gmail.com">
      <FaEnvelope className="icon" />
    </a>
  </div>
  <p className="mt-3">&copy; 2025 Kalpesh Parmar. All Rights Reserved.</p>
</footer>

    </div>
  );
};

export default App;
