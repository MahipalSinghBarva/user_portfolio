import React, { useEffect, useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Eye, Link2Icon } from "lucide-react";
import ProjectDetails from "./ProjectDetails";

const ProjectCard = ({ index, title, image, project }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleViewClick = () => {
    setSelectedProject(project);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setSelectedProject(null);
  };

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary px-2 pt-3 rounded-lg sm:w-[360px] w-full h-full "
      >
        <div className=" w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover "
          />
        </div>

        <div className="w-full">
          <div className="mt-4 w-50 flex justify-around">
            <h3 className="text-white font-bold text-[16px] w-60">{title}</h3>
            <div className="mt-1">
              <Link onClick={handleViewClick} className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-eye text-white border h-8 w-10 px-2 rounded-2xl hover:bg-purple-400 hover:text-black border-purple-700"
                >
                  <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </Tilt>
      {isPopupOpen && (
        <ProjectDetails project={selectedProject} onClose={handleClosePopup} />
      )}
    </motion.div>
  );
};

const Works = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getMyProjectDetails = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:3000/api/v1/project/getall"
        );
        setProjects(data.projects || []);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    getMyProjectDetails();
  }, []);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h3 className={styles.sectionHeadText}>Projects</h3>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px]  leading-[30px] w-full "
        >
          Following projects showcase my skills and experience through
          real-world examples. Each project is briefly described, with links to
          code repositories and live demos, reflecting my ability to solve
          complex problems and work with different technologies.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7  max-[1100px]:justify-center justify-center">
        {projects.map((project, index) => (
          <ProjectCard
            key={project._id}
            index={index}
            title={project.title}
            image={project.projectBanner?.url}
            id={project._id}
            project={project}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
