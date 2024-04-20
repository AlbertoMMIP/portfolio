import { motion } from 'framer-motion';
import './hero.scss';


const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    }
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity
    }
  }
}

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    }
  },
 }

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div variants={textVariants} className="textContainer" initial="initial" animate="animate">
          <motion.h2 variants={textVariants}>Alberto Martinez</motion.h2>
          <motion.h1 variants={textVariants}>Software Egineer JS</motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>See the last works</motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </motion.div>
         <motion.img variants={textVariants} animate="scrollButton" src="./scroll.png" alt="scroll" />
       </motion.div>
      </div>
      <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate" >
        Engineer, friend, brother, housband and soon father!
      </motion.div>
      <div className="imageContainer">
        <img src="/hero.png" alt="" />
      </div>
    </div>
  );
}

export default Hero;
