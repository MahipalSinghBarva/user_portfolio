import { motion } from "framer-motion"
import {styles} from '../style'
import { staggerContainer } from "../utils/motion"


const SectionWrapper = (Component, idName) => 
  function HOC(){
    return (
        <motion.section
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{once:true, amount:0.25}}
          className={`${styles.padding} max-w-7x1  relative  `}
        >
          <span className="hash-span" id={idName}></span>
            <Component/>
        </motion.section>
    )
  }
  


export default SectionWrapper
