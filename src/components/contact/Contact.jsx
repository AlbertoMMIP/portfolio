import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './contact.scss';


const variants = {
  initial: {
    y: 500,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    }
  }
} 

const Contact = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: '-100px' })

  return (
    <motion.div ref={ref} className='contact'
      variants={variants} initial='initial' whileInView='animate'>
      <motion.div className='textContainer' variants={variants}>
        <motion.h1 variants={variants}>Lets work together!</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Mail</h2>
          <span>jalberto.martinez.fs@gmail.com</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Address</h2>
          <span>CDMX, Mexico</span>
        </motion.div> 
        <motion.div className="item" variants={variants}>
          <h2>Phone</h2>
          <span>+52 55 7868 7852</span>
        </motion.div>
      </motion.div>
      <div className='formContainer'>
        <motion.div className='phoneSvg' 
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ delay: 3, duration: 1 }}>
          <svg width='450px'
            height='450px'
            viewBox="0 0 24 24">
            <motion.path
              stroke={.02}
              fill='none'
              initial={{ pathLength: 0 }}
              animate={isInView && { pathLength: 1 }}
              transition={{ duration: 3 }}
              d="M14.5 6.5C15.2372 6.64382 15.9689 6.96892 16.5 7.5C17.0311 8.03108 17.3562 8.76284 17.5 9.5M15 3C16.5315 3.17014 17.9097 3.91107 19 5C20.0903 6.08893 20.8279 7.46869 21 9M20.9995 16.4767V19.1864C21.0037 20.2223 20.0723 21.0873 19.0265 20.9929C10.0001 21 3.00006 13.935 3.00713 4.96919C2.91294 3.92895 3.77364 3.00106 4.80817 3.00009H7.52331C7.96253 2.99577 8.38835 3.151 8.72138 3.43684C9.66819 4.24949 10.2772 7.00777 10.0429 8.10428C9.85994 8.96036 8.99696 9.55929 8.41026 10.1448C9.69864 12.4062 11.5747 14.2785 13.8405 15.5644C14.4272 14.9788 15.0274 14.1176 15.8851 13.935C16.9855 13.7008 19.7615 14.3106 20.5709 15.264C20.858 15.6021 21.0105 16.0337 20.9995 16.4767Z" >
            </motion.path>
          </svg>
        </motion.div>
        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}>
          <input type='text' required placeholder='Name' />
          <input type='email' required placeholder='Email' />
          <textarea rows={8} placeholder='Message' />
          <button>Contact me!</button>
        </motion.form>
      </div>
    </motion.div>
  );
}

export default Contact;
