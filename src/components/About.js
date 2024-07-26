import React from "react";
import { motion as m } from "framer-motion";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";
import portrait from "../images/portrait.jpg";
import "../styles/About.css";
import { Link } from "react-router-dom";


const About = () => {
  const AboutVariants = {
    initial: { y: "-100%", x: "-100%", opacity: 1 },
    animate: { y: "0%", x: "0%", opacity: 1 },
    exit: { y: "-100%", x: "-100%", opacity: 1 },
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
        key="About"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={AboutVariants}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="absolute w-full h-full bg-stone-200 text-black overflow-auto"
        onAnimationComplete={() => setNavbarVisible(true)}
        onAnimationStart={() => setNavbarVisible(false)}
      >
        <main className="flex flex-col items-center justify-center mt-24 mb-20 p-4">
          <div className="about-section grid grid-cols-1 md:grid-cols-3 items-center gap-4 border rounded shadow-md p-4 bg-stone-300 w-11/12 max-w-5xl">
            <div className="md:col-span-1 flex justify-center">
              <img src={portrait} alt="Portrait" className="portrait-img" />
            </div>
            <div className="md:col-span-2 flex flex-col items-center md:items-start">
              <h1 className="text-6xl text-center md:text-left mb-4 text-blue-600 font-bold">Nice to meet you!</h1>
              <p className="text-lg text-center md:text-left">
                I am currently a second year Software and Biomedical Engineering student at McMaster University in Hamilton, Ontario.
                This portfolio is meant to serve as a brief insight into both my personal and professional lives. 
                To read more about my professional side, please navigate to other sections of my page, as here I will be sharing a bit about my passions and hobbies!
              </p>
            </div>
          </div>
          <hr className="my-16 border-t-2 border-gray-300 w-2/3" />
          <div className="about-section sports-section grid grid-cols-1 items-center gap-8 border rounded shadow-md p-4 bg-white w-11/12 max-w-5xl text-center">
            <div className="flex flex-col items-center">
              <h1 className="text-6xl text-center mb-4 text-blue-600 font-bold">Sports</h1>
              <p className="text-lg text-center px-4 md:px-8">
                Fitness is something that is very important to me, and has led to hundreds of hours spent in McMaster's The Pulse.
                Much of this commitment comes from over 7 years competing as an acrobatic gymnast on Team Canada!
                This sport helped me develop strong disciplinary and time-management skills while also providing me opportunities to travel the world. 
                In fact, I competed in a total of <b>3 continents </b>and <b>6 different countries! </b>One of my competition highlights was placing 8th at the World Acrobatic Gymnastics Competition 2022 in Baku, Azerbaijan!
                I retired from acro in 2022, and have since picked up other activities such as weightlifting, golf, and rock climbing.
              </p>
            </div>
          </div>
          <hr className="my-16 border-t-2 border-gray-300 w-2/3" />
          <div className="about-section travel-section grid grid-cols-1 items-center gap-8 border rounded shadow-md p-4 bg-white w-11/12 max-w-5xl text-center">
            <div className="flex flex-col items-center">
              <h1 className="text-6xl text-center mb-4 text-blue-600 font-bold">Passions</h1>
              <p className="text-lg text-center px-4 md:px-8">
                Traveling is one of my greatest passions. Seeing the world and spending time with family is one of the many priveleges that life has to offer. 
                <br/><br/>
                I also really enjoy music, and am a bit of a concert enthusiast. Some of my favourite shows have been Travis Scott, Red Hot Chili Peppers, and Drake. 
                Whether I'm walking to class, at the gym, or studying, you can bet I've got headphones on.
                <br/><br/>
                Some other fun facts are that I enjoy fishing, cooking, and can solve a 3x3 rubik's cube in under 20 seconds. 
              </p>
            </div>
          </div>
          <hr className="my-16 border-t-2 border-gray-300 w-2/3" />
          <Footer/>
        </main>
      </m.div>
    </div>
  );
};

export default About;
