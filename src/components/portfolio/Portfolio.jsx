import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { app } from './../../constants';
import './portfolio.scss';

const items = app.projects; 

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  })

  const y = useTransform(scrollYProgress, [0,1], [-300, 300]);

  return (
    <section>
      <div className='container'>
        <div className='wrapper'>
          <div className='imageContainer' ref={ref}>
            <img src={item.img} alt='' />
          </div>
          <motion.div className='textContainer' style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.url} target="_blank" > See Code </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const Portfolio = () => {

  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'start start'],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  
  return (
    <div className='portfolio' ref={ref}>
      <div className='progress'>
        <h1>Feature Works</h1>
        <motion.div className='progressBar' style={{ scaleX }}>
        </motion.div>
      </div>
      {
        items.map(item => {
          return (
            <Single item={item} key={item.id} />
          );
        })
      }
    </div>
  );
}

export default Portfolio;
