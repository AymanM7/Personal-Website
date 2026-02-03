import { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'
import Image from 'next/image'

const Details = ({ position, company, companyLink, time, address, work, logo }) => {
  const ref = useRef(null)
  return (
    <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
        className='w-full'
      >
        <div className='flex items-start gap-6'>
          {logo && (
            <div className='flex-shrink-0 w-52 h-32 rounded-xl overflow-hidden shadow-lg border-2 border-dark/10 dark:border-primaryDark/30 bg-gradient-to-br from-light to-light/80 dark:from-dark dark:to-dark/80 flex items-center justify-center p-2'>
              <Image src={logo} alt={company} width={200} height={120} className='object-contain w-full h-full' />
            </div>
          )}
          <div className='flex-1'>
            <a href={companyLink} target="_blank" className='text-primary dark:text-primaryDark font-bold text-4xl sm:text-3xl xs:text-2xl hover:underline'>
              {company}
            </a>
            <div className='w-full h-1 bg-gradient-to-r from-primary to-primaryDark rounded-full mt-2 mb-3'></div>
            <h3 className='font-semibold text-2xl sm:text-xl xs:text-lg text-dark dark:text-light'>
              {position}
            </h3>
            <span className='text-xl font-medium text-dark/75 dark:text-light/75 xs:text-lg'>
              {time} | {address}
            </span>
            <p className='font-medium w-full text-lg md:text-base mt-3'>
              {work}
            </p>
          </div>
        </div>
      </motion.div>
    </li>
  )
}

const Experience = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"]
  })
  
  return (
    <div className='my-64'>
      <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
        Experience
      </h2>
      
      <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]'
        />
        
        <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
          <Details
            position="ACM Undergrad Researcher"
            company="ACM UTD"
            companyLink="https://github.com/AymanM7/Adveyes-ACM-Research"
            time="Sep 2025 - Dec 2025"
            address="UT Dallas"
            work="Worked on the Adveyes ADHD study to advance early detection and intervention for people with ADHD. Designed and executed data collection with 20 participants, integrating eye tracking and behavioral analysis with advanced speech processing using Pratt. Developed a machine learning pipeline that analyzed 1000+ data points and achieved 91% classification accuracy, demonstrating real-world potential for improving ADHD diagnostics. Communicated results to judges through a symposium poster, highlighting the project’s innovation and impact for individuals."
            logo="/images/logos/Screenshot_22-1-2026_22152_github.com.jpeg"
          />
          <Details
            position="Math Instructor"
            company="Mathnasium"
            companyLink="https://www.mathnasium.com/"
            time="July 2023 - June 2024"
            address="Frisco, TX"
            work="Helped 50+ students from elementary to high school understand math concepts instead of just memorizing formulas. Worked one on one with students and led small groups to identify struggles and create personalized learning approaches. Communicated progress updates to parents and helped onboard and train 5+ new employees when they joined the team."
            logo="/images/logos/Screenshot_22-1-2026_22220_www.google.com.jpeg"
          />
        </ul>
      </div>
    </div>
  )
}

export default Experience
