import React from "react";
import { motion as m } from "framer-motion";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";
import "../styles/Contact.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const ContactVariants = {
    initial: { y: "100%", x: "-100%", opacity: 1 },
    animate: { y: "0%", x: "0%", opacity: 1 },
    exit: { y: "100%", x: "-100%", opacity: 1 },
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
        key="Contact"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={ContactVariants}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="absolute w-full h-full bg-stone-200 text-black overflow-auto"
        onAnimationComplete={() => setNavbarVisible(true)}
        onAnimationStart={() => setNavbarVisible(false)}
      >
        <main className="flex flex-col items-center justify-center mt-24 mb-8 p-4">
          <div className="contact-section grid grid-cols-1 items-center gap-4 border rounded shadow-md p-4 bg-stone-300 w-11/12 max-w-5xl">
            <div className="flex flex-col items-center">
              <h1 className="text-6xl text-center mb-0 text-black font-bold">Let's get in touch!
              </h1>
            </div>
          </div>
          <div className="flex justify-center">
            <hr className="my-5 border-t-2 border-gray-300 w-2/3 relative z-20" />
          </div>
          <div className="social-icons grid grid-cols-2 gap-4 md:flex md:justify-center mt-8">
            <a href="https://github.com/kristiandiana" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center mx-6 text-center text-black hover:text-gray-600">
              <FaGithub className="text-6xl" />
              <span className="mt-2 text-lg">GitHub</span>
            </a>
            <a href="https://devpost.com/kristian8diana?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center mx-6 text-center text-black hover:text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="text-6xl" viewBox="0 0 24 24" width="61" height="61"><path fill="currentColor" d="M6.002 1.61L0 12.004L6.002 22.39h11.996L24 12.004L17.998 1.61zm1.593 4.084h3.947c3.605 0 6.276 1.695 6.276 6.31c0 4.436-3.21 6.302-6.456 6.302H7.595zm2.517 2.449v7.714h1.241c2.646 0 3.862-1.55 3.862-3.861c.009-2.569-1.096-3.853-3.767-3.853Z"/></svg>
              <span className="mt-2 text-lg">Devpost</span>
            </a>
            <a href="https://www.linkedin.com/in/kristiandiana/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center mx-6 text-center text-black hover:text-gray-600">
              <FaLinkedin className="text-6xl" />
              <span className="mt-2 text-lg">LinkedIn</span>
            </a>
            <a href="mailto:dianak@mcmaster.ca" className="flex flex-col items-center mx-6 text-center text-black hover:text-gray-600">
              <FaEnvelope className="text-6xl" />
              <span className="mt-2 text-lg">Email</span>
            </a>
          </div>
        </main>
        <Footer />
      </m.div>
    </div>
  );
};

export default Contact;
