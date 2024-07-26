import React from "react";
import { motion as m } from "framer-motion";
import { Link } from "react-router-dom"; // Assuming you are using React Router for navigation
import Navbar from "./Navbar.js";

const Education = () => {
  const EducationVariants = {
    initial: { y: "100%", x: "100%", opacity: 1 },
    animate: { y: "0%", x: "0%", opacity: 1 },
    exit: { y: "100%", x: "100%", opacity: 1 },
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
      key="Education"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={EducationVariants}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="absolute top-0 left-0 w-full h-full bg-black text-white"
      onAnimationComplete={() => setNavbarVisible(true)}
      onAnimationStart={() => setNavbarVisible(false)}
    >
      <main>
        <Navbar/>
        <div className="my-40 p-4 border rounded shadow-md">
          <h1 className="text-6xl text-center">Education</h1>
        </div>
        <div className="p-4 border rounded shadow-md">
          <Link to={"/"}>
            <h1 className="my-5 text-6xl text-center">Back</h1>
          </Link>
        </div>
      </main>
    </m.div>
    </div>
  );
}

export default Education;
