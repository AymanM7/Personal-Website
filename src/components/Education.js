import { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'
import Image from 'next/image'

const Details = ({ type, time, place }) => {
  const ref = useRef(null)
  return (
    <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
        whileHover={{ boxShadow: '0 0 0 6px rgba(251, 146, 60, 0.15)', backgroundColor: 'rgba(251, 146, 60, 0.08)' }}
        className='bg-white dark:bg-dark rounded-2xl shadow-lg border border-orange-400/60 p-8 flex flex-col items-center w-full relative transition-all duration-300 hover:shadow-orange-200/60 dark:hover:shadow-orange-400/40 group'
      >
        <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-80 transition-opacity duration-300 bg-gradient-to-br from-orange-200 via-orange-100 to-transparent" />
        <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg text-center text-orange-600 z-10'>
          {type}
        </h3>
        <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm mt-2 z-10'>
          {time} | {place}
        </span>
      </motion.div>
    </li>
  )
}

const Education = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"]
  })
  
  return (
    <>
      <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
          Education
        </h2>
        <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className='absolute left-9 top-0 w-[4px] h-full bg-gradient-to-b from-orange-400 via-orange-200 to-orange-400 origin-top dark:bg-gradient-to-b dark:from-orange-300 dark:via-orange-100 dark:to-orange-300 md:w-[2px] md:left-[30px] xs:left-[20px]'
          />
          <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
            <Details
              type="Bachelor of Science in Computer Information Systems and Technology"
              time="2024-2028"
              place="The University of Texas at Dallas (UTD)"
            />
          </ul>
        </div>
      </div>
      {/* Honors & Awards Section */}
      <div className="mt-24 w-[75%] mx-auto lg:w-[90%] md:w-full">
        <h3 className="font-bold text-4xl mb-8 text-orange-600 text-center md:text-3xl xs:text-2xl">Honors & Awards</h3>
        <ul className="flex flex-col gap-6 items-center">
          <li className="bg-white dark:bg-dark border-l-4 border-orange-400 px-6 py-4 rounded-xl shadow-md w-full max-w-2xl">
            <span className="font-bold text-lg text-dark dark:text-light">Academic Excellence Scholar</span>
          </li>
          <li className="bg-white dark:bg-dark border-l-4 border-orange-400 px-6 py-4 rounded-xl shadow-md w-full max-w-2xl">
            <span className="font-bold text-lg text-dark dark:text-light">FEF Scholar</span>
            <span className="ml-2 text-sm text-dark/60 dark:text-light/60">(Frisco Education Foundation)</span>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Education
