import React from "react";
import { motion as m } from "framer-motion";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";
import "../styles/Education.css";

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
        className="absolute w-full h-full bg-stone-200 text-black overflow-auto"
        onAnimationComplete={() => setNavbarVisible(true)}
        onAnimationStart={() => setNavbarVisible(false)}
      >
        <main className="flex flex-col items-center justify-center mt-24 mb-10 p-4">
          {/* Section for School 1 */}
          <div className="education-section bg-slate-100 border rounded shadow-md p-4 w-11/12 max-w-5xl mb-8">
            <h1 className="text-4xl text-center mb-4 text-black font-bold">McMaster University</h1>
            <p className="text-lg text-blue-600"><strong>Software and Biomedical Engineering Bachelor's Degree Seeking</strong></p>
            <p className="text-lg text-blue-600"><strong>Graduation Date: </strong>2028</p>
            <p className="text-lg text-blue-600"><strong>Location:</strong> Hamilton, Ontario</p>
            <p className="text-lg"><strong>Involvement Highlights:</strong></p>
            <ul className="list-disc list-inside text-lg ml-4">
              <li>GDSC Project Lead</li>
              <li>McMaster AI Society Project Member</li>
            </ul>
          </div>

          <hr className="my-8 border-t-2 border-gray-300 w-11/12 max-w-5xl" />

          {/* Section for School 2 */}
          <div className="education-section bg-slate-100 border rounded shadow-md p-4 w-11/12 max-w-5xl mb-8">
            <h1 className="text-4xl text-center mb-4 text-black font-bold">St. Ignatius of Loyola C.S.S.</h1>
            <p className="text-lg text-blue-600"><strong>Graduation Date: </strong>2023</p>
            <p className="text-lg text-blue-600"><strong>Location:</strong> Oakville, Ontario</p>
            <p className="text-lg"><strong>Involvement Highlights:</strong></p>
            <ul className="list-disc list-inside text-lg ml-4">
              <li>FRC 9098 Programming Sub-team Lead</li>
              <li>Concert Band Member</li>
              <li>Grade 11 Computer Science Subject Award</li>
            </ul>
          </div>
        </main>
        <Footer />
      </m.div>
    </div>
  );
};

export default Education;
