import { SectionWrapper } from "../hoc";
import axios from "axios";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../style";

import "./tech.css";
import { BallCanvas } from "../assets/canvas";

const Tech = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const getAllSkills = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:3000/api/v1/skill/getall"
        );
        setSkills(data.skill || []);
      } catch (error) {
        console.error("Error fetching Skills:", error);
      }
    };
    getAllSkills();
  }, []);

  return (
    <div>
      <div>
        <p className={styles.sectionSubText}>What I have learn so far</p>
        <h3 className={styles.sectionHeadText}>My Tech Skill's</h3>
      </div>

      <div className="flex flex-row flex-wrap gap-5 mt-10 lg:px-28 w-full h-full items-center justify-start max-[645px]:justify-center">
        {skills.map((skill) => (
          <motion.div
            className="tech-containor"
            key={skill._id}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            transition={{ type: "spring", stiffness: 100, damping: 5 }}
          >
            <div className="tech-containor border border-purple-800 rounded-xl items-center w-36 h-36 justify-center flex flex-col flex-wrap px-5 py-5  bg-purple-800/30 hover:bg-purple-800/80">
              <img src={skill.svg.url} className="w-16" alt={skill.title} />
              <p className="text-white mt-1 text-[13px]">{skill.title}</p>
              {/* <div className="flex flex-col flex-wrap w-full">
                <progress
                  className="progress-bar w-full h-3 rounded-sm"
                  value={skill.proficiency}
                  max="100"
                ></progress>
                <p className="text-white mt-1">{skill.title}</p>
              </div> */}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
