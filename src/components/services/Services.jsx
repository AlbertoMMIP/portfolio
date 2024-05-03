import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { app } from './../../constants';
import './services.scss';


const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
}
const Services = () => {
  const ref = useRef();

  const { experience } = app;

  return (
    <motion.div 
      className='services' 
      ref={ref} 
      variants={variants} 
      initial="initial" 
      animate="animate">
      <motion.div className='textContainer' variants={variants}>
        <p> I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className='titleContainer' variants={variants}>
        <div className='title'>
          <img src='/people.webp' alt='' />
          <h1>My <motion.b whileHover={{ color: "orange" }}>Experience</motion.b></h1>
        </div>
        <div className='title'>
          <h1><motion.b whileHover={{ color: "orange" }}>Software Engineer</motion.b> JavaScript</h1>
          <button> WHAT I DO? </button>
        </div>
      </motion.div>
      <motion.div className='listContainer' variants={variants}>
        {
          experience && experience.map(job => (
            <motion.div className='box' whileHover={{ background: "lightgray", color: "black" }}>
              <h2>{job.company}</h2>
              <h3>{job.rol}</h3>
              <p>{`${job.from}-${job.to}`}</p>
              <p>{job.summary}</p>
              <button>Go</button>
            </motion.div>
          ))
        }
      </motion.div>
    </motion.div>
  );
}

export default Services;
