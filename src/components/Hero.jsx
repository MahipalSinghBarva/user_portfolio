import { motion } from "framer-motion";
import { styles } from "../style";
import { ComputersCanvas } from "../assets/canvas/index";
import { Typewriter } from "react-simple-typewriter";
import { useEffect, useState } from "react";
import axios from "axios";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import myImage from "../assets/tech/7040859.jpg";

const Hero = () => {
  const [user, setUser] = useState({});
// console.log(user)
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

  const data = [
    { id: 1, image: <Linkedin />, url: user.linkedIn },
    { id: 2, image: <Instagram />, url: user.instagram },
    { id: 3, image: <Github />, url: user.githubURL },
    { id: 3, image: <Twitter />, url: user.twitterURL },
  ];

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi there, I'm{" "}
            <span className="text-[#915EFF]"> {user.fullName}</span>
          </h1>
          <h3 className="text-tubeLight-effect overflow-x-hidden text-[1.3rem] sm:text-[1.7rem] md:text-[2.2em] lg:text-[2rem] tracking-[15px] text-white">
            <Typewriter
              words={["SOFTWARE ENGINEER", "PRODUCT ENGINEER", "UI/UX DEGINER"]}
              loop={true}
              cursor
              typeSpeed={70}
              delaySpeed={100}
              deleteSpeed={70}
            />
          </h3>
          <button
            type="button"
            className="cursor-pointer bg-transparent py-2 mt-10 px-4 rounded-xl outline-none w-fit text-[#915EFF] border border-purple-600/80 font-bold shadow-md shadow-primary hover:text-white hover:bg-purple-600 transition-all duration-300 ease-in-out  hover:scale-105 hover:shadow-lg"
          >
            <a href={user?.resume?.url}>Download CV</a>
          </button>
          <motion.div className="flex gap-2 box flex-wrap">
            {data.map((item) => (
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                key={item.id}
              >
                <motion.div
                  className="mt-5 w-12 py-1 h-10 bg-white/70 rounded border border-purple-600 box flex justify-center items-center"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {item.image}
                </motion.div>
              </a>
            ))}
          </motion.div>
        </div>

        {/* <motion.div
          animate={{
            y: [0, 24, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          <img src={myImage} className=""/>
        </motion.div> */}
      </div>

      {/* <ComputersCanvas className="max-[1200px]:hidden"/> */}

      <div className="absolute xs:bottom-10 bottom-3 w-full flex justify-center items-center ">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 md:mt-20">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1 "
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
