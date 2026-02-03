import Link from 'next/link'
import { motion } from 'framer-motion'

const MotionLink = motion(Link)

const Logo = () => {
  return (
    <div className='flex items-center justify-center mt-2'>
      <MotionLink href="/"
        className='w-auto px-6 h-20 bg-dark text-light flex items-center justify-center rounded-full text-xl font-bold border-2 border-solid border-transparent dark:border-light whitespace-nowrap shadow-lg'
        whileHover={{
          scale: 1.05,
          backgroundColor: ["#121212", "rgba(131,58,180,1)", "rgba(253,29,29,1)", "rgba(252,176,69,1)", "rgba(131,58,180,1)", "#121212"],
          rotate: [0, -2, 2, -2, 0],
          transition: { duration: 1, repeat: Infinity }
        }}
        whileTap={{ scale: 0.95 }}
      >
        Ayman Mohammad
      </MotionLink>
    </div>
  )
}

export default Logo
