import Link from 'next/link'
import { motion } from 'framer-motion'

const HireMe = () => {
  return (
    <div className='w-56 h-auto flex items-center justify-center relative md:w-28'>
      <svg className='animate-spin-slow' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <path id="circlePath" d="M100,100 m-75,0 a75,75 0 1,1 150,0 a75,75 0 1,1 -150,0" />
        </defs>
        <text className='fill-dark dark:fill-light text-xs font-semibold uppercase tracking-widest'>
          <textPath href="#circlePath" startOffset="0%">
            Get In Touch • Get In Touch •
          </textPath>
        </text>
      </svg>
      <Link href="mailto:ayman@example.com" className='flex items-center justify-center text-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark w-24 h-24 rounded-full font-semibold hover:bg-light hover:text-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:w-14 md:h-14 md:text-[8px] text-sm leading-tight'>
        Get In Touch
      </Link>
    </div>
  )
}

export default HireMe
