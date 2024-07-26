import React from "react";
import { motion as m } from "framer-motion";
import { Link } from "react-router-dom"; // Assuming you are using React Router for navigation
import Navbar from "./Navbar.js";

const Contact = () => {
  const ContactVariants = {
    initial: { y: "100%", x: "-100%", opacity: 1 },
    animate: { y: "0%", x: "0%", opacity: 1 },
    exit: { y: "100%", x: "-100%", opacity: 1},
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
      className="absolute top-0 left-0 w-full h-full bg-stone-200 text-white"
      onAnimationComplete={() => setNavbarVisible(true)}
      onAnimationStart={() => setNavbarVisible(false)}
    >
      <main className="flex flex-col items-center justify-center mt-24 mb-20 p-4">
          
          
          <div className="about-section grid grid-cols-1 md:grid-cols-3 items-center gap-4 border rounded shadow-md p-4 bg-stone-300 w-11/12 max-w-5xl">
            
            <div className="md:col-span-2 flex flex-col items-center md:items-start">
              <h1 className="text-6xl text-center md:text-left mb-4 text-blue-600 font-bold">CONTACT SECTION TEMP</h1>
              <p className="text-lg text-center md:text-left">
              Personal: Demonstrate skills I have gained through independent research
              </p>
            </div>
          </div>
          <hr className="my-16 border-t-2 border-gray-300 w-2/3" />
          <div className="about-section sports-section grid grid-cols-1 items-center gap-8 border rounded shadow-md p-4 bg-white w-11/12 max-w-5xl text-center">
            <div className="flex flex-col items-center">
              <h1 className="text-6xl text-center mb-4 text-blue-600 font-bold">Project 1</h1>
              <p className="text-lg text-center px-4 md:px-8">
                Project 1 Description
              </p>
            </div>
          </div>

          <div className="about-section hobbies-section grid grid-cols-1 items-center gap-8 border rounded shadow-md p-4 bg-white w-11/12 max-w-5xl text-center">
            <div className="flex flex-col items-center">
              <h1 className="text-6xl text-center mb-4 text-blue-600 font-bold">Project 2</h1>
              <p className="text-lg text-center px-4 md:px-8">
                Project 2 Description
              </p>
            </div>
          </div>

          <div className="about-section travel-section grid grid-cols-1 items-center gap-8 border rounded shadow-md p-4 bg-white w-11/12 max-w-5xl text-center">
            <div className="flex flex-col items-center">
              <h1 className="text-6xl text-center mb-4 text-blue-600 font-bold">Project 3</h1>
              <p className="text-lg text-center px-4 md:px-8">
               Project 3 Description
              </p>
            </div>
          </div>
          <div className="col-start-1 md:col-span-2 row-start-4 flex justify-center items-center shadow-3d">
              <Link to={'/Contact'} className="box w-full h-full aspect-square p-2 md:p-4 rounded shadow-md bg-gray-100 flex flex-col items-center justify-center transform transition-transform hover:scale-105">
                <h1 className="text-4xl md:text-5xl lg:text-6xl text-center box-text">Contact</h1>
              </Link>
            </div>
        </main>
    </m.div>
    </div>
  );
}

export default Contact;
