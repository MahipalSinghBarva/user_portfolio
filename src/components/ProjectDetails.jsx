import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./projectdetails.css";

const ProjectDetails = ({ project, onClose }) => {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 flex justify-center items-center  backdrop-blur-md project-details-main-div "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}  
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="bg-[rgba(5,8,22,0.84)] p-5 rounded-lg max-w-screen-lg w-full h-auto max-h-[90%] overflow-y-auto shadow-lg relative transition-transform duration-300 project-details-main-div "
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <button
              className="absolute top-3 right-3 px-3 py-1 rounded-md bg-red-900 hover:bg-red-700 text-white transition-transform duration-300 hover:scale-105"
              onClick={onClose}
              aria-label="Close project details"
            >
              x
            </button>
            <div className="flex flex-col md:flex-row gap-5 mt-5 w-full">
              <div className="flex w-full md:w-1/2">
                <img
                  className="w-full rounded-lg object-cover"
                  src={project.projectBanner.url}
                  alt={`${project.title} project banner`}
                />
              </div>
              <div className="flex flex-col w-full md:w-1/2">
                <h1 className="text-lg md:text-xl font-bold text-purple-800">
                  Project Title: <span className="text-white/70">{project.title}</span>
                </h1>
                <p className="text-purple-800 mt-2 font-bold">
                  Description: <span className="font-semibold text-white/70">{project.description}</span>
                </p>

                <div className="mt-5">
                  <p className="font-bold text-purple-800">
                    Deployed: <span className="font-semibold text-white/70">{project.deployed}</span>
                  </p>
                  <p className="font-bold text-purple-800">
                    Tech Stack: <span className="font-semibold text-white/70">{project.stack}</span>
                  </p>
                  <p className="font-bold text-purple-800">
                    Technologies: <span className="font-semibold text-white/70">{project.technologies}</span>
                  </p>
                </div>

                <div className="flex flex-col md:flex-row gap-5 mt-5">
                  {project.projectLink && (
                    <a href={project.projectLink} target="_blank" rel="noopener noreferrer">
                      <button className="border px-5 py-3 rounded-md bg-purple-900 text-white transition-transform duration-300 hover:scale-105 hover:bg-purple-300 hover:text-black">
                        View Live Project
                      </button>
                    </a>
                  )}

                  {project.gitRepoLink && (
                    <a href={project.gitRepoLink} target="_blank" rel="noopener noreferrer">
                      <button className="border px-5 py-3 rounded-md bg-purple-900 text-white transition-transform duration-300 hover:scale-105 hover:bg-purple-300 hover:text-black">
                        GitHub Link
                      </button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectDetails;
