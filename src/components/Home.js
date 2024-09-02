import React from 'react';
import { motion as m } from "framer-motion";
import { Link } from "react-router-dom";
import { Typewriter } from 'react-simple-typewriter';
import { Person, CodeSlash, Link45deg, Mortarboard } from 'react-bootstrap-icons';
import '../styles/Home.css'; // Make sure this imports your CSS file where the shadow-3d class is defined
import ParticlesComponent from './particles';

const Home = () => {
  return (
    <div>
      <ParticlesComponent id="particles"/>
      <m.div
        key="home"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute top-0 left-0 w-full h-full bg-transparent text-black"
      >
        <main className="flex items-center justify-center h-full p-4 md:p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-4 gap-4 md:gap-5 w-full max-w-screen-lg h-full">
            <div className="col-start-1 md:col-span-2 row-start-1 flex justify-center items-center shadow-3d">
              <Link to={"/About"} className="box w-full h-full aspect-square p-2 md:p-4 rounded shadow-md bg-gray-100 flex flex-col items-center justify-center transform transition-transform hover:scale-105">
                <Person className="mb-2 text-6xl box-icon" />
                <h1 className="text-4xl md:text-5xl lg:text-6xl text-center box-text">About</h1>
              </Link>
            </div>
            <div className="col-start-2 md:col-start-3 md:col-span-2 row-start-1 flex justify-center items-center shadow-3d">
              <Link to={"/Projects"} className="box w-full h-full aspect-square p-2 md:p-4 rounded shadow-md bg-gray-100 flex flex-col items-center justify-center transform transition-transform hover:scale-105">
                <CodeSlash className="mb-2 text-6xl box-icon" />
                <h1 className="text-4xl md:text-5xl lg:text-6xl text-center box-text">Projects</h1>
              </Link>
            </div>
            <div className="col-start-1 col-span-2 md:col-span-4 row-start-2 row-span-2 p-2 md:p-4 rounded shadow-md bg-semi-transparent flex flex-col items-center justify-center shadow-3d no-border text-white">
              <div className="p-2 md:p-3 overflow-hidden">
                <m.h1
                  animate={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{ duration: 1.5 }}
                  className="text-5xl md:text-6xl lg:text-7xl text-center"
                >
                  Hey, it's Kristian! 
                </m.h1>
              </div>
              <div className="text-4xl md:text-5xl lg:text-6xl text-center mt-8 flex justify-center items-center typewriter-container">
                <p className="mr-2 typewriter-text">Welcome</p>
                <Typewriter 
                  words={[' to my personal portfolio.']} 
                  loop={false} 
                  cursor 
                  cursorStyle='|' 
                  typeSpeed={100} 
                  deleteSpeed={0} 
                  delaySpeed={5000} 
                />
              </div>
            </div>
            <div className="col-start-1 md:col-span-2 row-start-4 flex justify-center items-center shadow-3d">
              <Link to={'/Contact'} className="box w-full h-full aspect-square p-2 md:p-4 rounded shadow-md bg-gray-100 flex flex-col items-center justify-center transform transition-transform hover:scale-105">
                <Link45deg className="mb-2 text-6xl box-icon" />
                <h1 className="text-4xl md:text-5xl lg:text-6xl text-center box-text">Contact</h1>
              </Link>
            </div>
            <div className="col-start-2 md:col-start-3 md:col-span-2 row-start-4 flex justify-center items-center shadow-3d">
              <Link to={'/Education'} className="box w-full h-full aspect-square p-2 md:p-4 rounded shadow-md bg-gray-100 flex flex-col items-center justify-center transform transition-transform hover:scale-105">
                <Mortarboard className="mb-2 text-6xl box-icon" />
                <h1 className="text-4xl md:text-5xl lg:text-6xl text-center box-text">Education</h1>
              </Link>
            </div>
          </div>
        </main>
      </m.div>
    </div>
  );
}

export default Home;
