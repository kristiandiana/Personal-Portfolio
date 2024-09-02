import React from "react";
import { motion as m } from "framer-motion";
import Navbar from "./Navbar.js";
import "../styles/Projects.css";
import Footer from "./Footer.js";

const Projects = () => {
  const ProjectsVariants = {
    initial: { y: "-100%", x: "100%", opacity: 1 },
    animate: { y: "0%", x: "0%", opacity: 1 },
    exit: { y: "-100%", x: "100%", opacity: 1 },
  };

  const navbarVariants = {
    hidden: { y: "-100%", opacity: 0 },
    visible: { y: "0%", opacity: 1 },
  };

  const [isNavbarVisible, setNavbarVisible] = React.useState(false);

  return (
    <div>
      {isNavbarVisible && (
        <m.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={navbarVariants}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute top-0 w-full z-50"
        >
          <Navbar />
        </m.div>
      )}
      <m.div
        key="Projects"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={ProjectsVariants}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="absolute w-full h-full bg-stone-200 text-black overflow-auto"
        onAnimationComplete={() => setNavbarVisible(true)}
        onAnimationStart={() => setNavbarVisible(false)}
      >
        <main className="flex flex-col items-center justify-center mt-24 mb-10 p-4">
          {/* Personal Projects Section */}
          <div className="w-11/12 max-w-5xl text-center mb-8">
            <h1 className="text-6xl text-black font-bold mb-2">Personal Projects</h1>
            <p className="text-lg">Demonstrating skills gained through independent research and projects.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-11/12 max-w-5xl mb-12">
            {/* Project 1 */}
            <div className="border rounded-lg shadow-md p-4 bg-slate-100 text-center">
              <h2 className="text-4xl text-black font-bold mb-2">Second Brain for Students</h2>
              <a href="https://github.com/McMasterAI/Second-Brain" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline mb-4 block">GitHub</a>
              <p className="text-lg mb-4">As a project member of McMaster's AI Society, I collaborated on a project centered around artificial intelligence. 
              Second Brain allows users to store documents in a database, and receive an answer to any relevant questions using Retrival-Augmented Generation.</p>
              <hr className="my-2 border-t border-gray-300"/>
              <div className="learning-highlight p-2 bg-blue-200 rounded-lg">
                <h3 className="text-2xl font-semibold mb-2">Learning Highlights</h3>
                <p className="text-base">Frontend and API development using React and Flask.</p>
              </div>
            </div>
            {/* Project 2 */}
            <div className="border rounded-lg shadow-md p-4 bg-slate-100 text-center">
              <h2 className="text-4xl text-black font-bold mb-2">Just The Instructions</h2>
              <a href="https://github.com/IainMac32/JustTheInstruction" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline mb-4 block">GitHub</a>
              <p className="text-lg mb-4">Isn't it the worst having to scroll for what feels like hours to get to the recipe on a webpage?
                JustTheInstructions is a Google Chrome Extension that solves this issue by using machine learning to extract only the information you actually want. 
              </p>
              <hr className="my-2 border-t border-gray-300"/>
              <div className="learning-highlight p-2 bg-blue-200 rounded-lg">
                <h3 className="text-2xl font-semibold mb-2">Learning Highlights</h3>
                <p className="text-base">ML model development using TensorFlow. Web data scraping using Beautiful Soup.
                  API deployment using Docker and GCP.
                </p>
              </div>
            </div>
            {/* Project 3 */}
            <div className="border rounded-lg shadow-md p-4 bg-slate-100 text-center">
              <h2 className="text-4xl text-black font-bold mb-2">SparkSlides</h2>
              <div className="flex justify-center">
                <a href="https://github.com/IainMac32/GDSChackathon" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline mb-4 block mr-4">GitHub</a>
                <a href="https://devpost.com/software/sparkslides" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline mb-4 block">Devpost</a>
              </div>
              <p className="text-lg mb-4">During the McMaster GDSC Solution Challenge 2024, my team created SparkSlides; a platform that automates slideshow creation.
                SparkSlides was the winning project for the equality and accessibility category. 
              </p>
              <hr className="my-2 border-t border-gray-300"/>
              <div className="learning-highlight p-2 bg-blue-200 rounded-lg">
                <h3 className="text-2xl font-semibold mb-2">Learning Highlights</h3>
                <p className="text-base">Exposure to, and use of various APIs including, but not limited to OpenAI API, Google Slides API, and Google Image Search API.</p>
              </div>
            </div>
            {/* Project 4 */}
            <div className="border rounded-lg shadow-md p-4 bg-slate-100 text-center">
              <h2 className="text-4xl text-black font-bold mb-2">Personal Portfolio: Edition 1</h2>
              <a href="https://kristiandiana-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline mb-4 block">Link</a>
              <p className="text-lg mb-4">One of my first web development projects. Introduced me to JavaScript and fundamental design skills. </p>
              <hr className="my-2 border-t border-gray-300"/>
              <div className="learning-highlight p-2 bg-blue-200 rounded-lg">
                <h3 className="text-2xl font-semibold mb-2">Learning Highlights</h3>
                <p className="text-base">Practice with CSS frameworks such as Bootstrap, and Tailwind.</p>
              </div>
            </div>
          </div>
          {/* Course Projects Section */}
          <div className="w-11/12 max-w-5xl text-center mt-12 mb-8">
            <h1 className="text-6xl text-black font-bold mb-2">Course Projects</h1>
            <p className="text-lg">Projects completed as part of engineering coursework.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-11/12 max-w-5xl mb-0">
            {/* Course Project 1 */}
            <div className="border rounded-lg shadow-md p-4 bg-slate-100 text-center">
              <h2 className="text-4xl text-black font-bold mb-2">ENGINEER 1P13 Learning Portfolio</h2>
              <a href="https://www.notion.so/Kristian-Diana-4d1f1c7296664794a5b86b21a2a9f74b" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline mb-4 block">Notion</a>
              <p className="text-lg mb-4">This portfolio contains the projects I completed during first year engineering at McMaster University.</p>
              <hr className="my-2 border-t border-gray-300"/>
              <div className="learning-highlight p-2 bg-blue-200 rounded-lg">
                <h3 className="text-2xl font-semibold mb-2">Learning Highlights</h3>
                <p className="text-base">CAD using Autodesk Inventor, programming using Python, and material selection using Ansys Granta.
                  Collaboration and team-management skills.
                </p>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </m.div>
    </div>
  );
}

export default Projects;
