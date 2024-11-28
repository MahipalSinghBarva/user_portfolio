import React, { useEffect, useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import axios from "axios";

const ServiceCard = ({ index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px]  about-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img
            src={icon}
            alt="web-development"
            className="w-16 h-16 object-contain"
          />

          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const getMyProtfolio = async () => {
      try {
        const { data } = await axios.get(
          "https://servrer-portfolio.onrender.com/api/v1/user/portfolio/me"
        );
        setUser(data.user || {});
      } catch (error) {
        console.error("Error fetching user portfolio:", error);
      }
    };

    getMyProtfolio();
  }, []);
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] w-full leading-[30px]"
      >
        <>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary text-[17px] w-full leading-[30px]"
          >
          {user.aboutMe}
          </motion.p>

          <div className="mt-20 flex flex-wrap justify-between xl:px-28 gap-5 max-[648px]:justify-center">
            {services.map((service, index) => (
              <ServiceCard key={service.title} index={index} {...service} />
            ))}
          </div>
        </>
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, "about");
