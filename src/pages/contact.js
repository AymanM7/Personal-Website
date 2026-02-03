import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import TransitionEffect from '@/components/TransitionEffect'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'


export function ContactContent() {
  const [currentTime, setCurrentTime] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const updateTime = () => {
      const now = new Date()
      const options = { 
        timeZone: 'America/Chicago',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      }
      setCurrentTime(now.toLocaleTimeString('en-US', options))
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
      <Layout className='pt-16'>
        <AnimatedText text="Let's Connect!" className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8' />
        <div className='flex flex-col items-center justify-center gap-8'>
          {/* Time Zone Card */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='relative group'
          >
            <div className='absolute -inset-1 bg-gradient-to-r from-primary via-primaryDark to-primary rounded-xl blur-md opacity-75 group-hover:opacity-100 transition duration-500 animate-pulse' />
            <div className='relative px-8 py-4 bg-dark dark:bg-light rounded-xl'>
              <div className='flex items-center gap-4'>
                <div className='text-2xl'>🌍</div>
                <div className='flex flex-col'>
                  <span className='text-light/70 dark:text-dark/70 text-sm font-medium'>My Local Time (CT)</span>
                  <span className='text-light dark:text-dark text-2xl font-bold font-mono tracking-wider'>
                    {mounted ? currentTime : '--:--:-- --'}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
          {/* Main Contact Card */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className='relative w-full max-w-xl group'
          >
            {/* Gradient border effect */}
            <div className='absolute -inset-1 bg-gradient-to-r from-primary via-primaryDark to-primary rounded-3xl blur opacity-50 group-hover:opacity-75 transition duration-500' />
            <div className='relative p-10 bg-light dark:bg-dark border border-dark/10 dark:border-light/10 rounded-3xl shadow-2xl'>
              <div className='flex flex-col items-center text-center'>
                {/* Animated envelope icon */}
                <motion.div 
                  className='text-7xl mb-6'
                  animate={{ 
                    rotateY: [0, 10, -10, 0],
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3
                  }}
                >
                  ✉️
                </motion.div>
                <h2 className='text-4xl font-bold mb-3 bg-gradient-to-r from-dark via-dark/80 to-dark dark:from-light dark:via-light/80 dark:to-light bg-clip-text'>
                  Get In Touch
                </h2>
                <div className='w-16 h-1 bg-gradient-to-r from-primary to-primaryDark rounded-full mb-6' />
                <p className='text-lg text-dark/60 dark:text-light/60 mb-8 leading-relaxed'>
                  Have a question, project idea, or just want to chat? <br />
                  I&apos;d love to hear from you!
                </p>
                <motion.a
                  href="mailto:Ayman.Mohammad2025@gmail.com"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className='group/btn relative inline-flex items-center gap-3 px-8 py-4 bg-dark text-light dark:bg-light dark:text-dark rounded-xl text-lg font-semibold overflow-hidden transition-all duration-300 shadow-lg hover:shadow-xl'
                >
                  <span className='absolute inset-0 bg-gradient-to-r from-primary to-primaryDark opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300' />
                  <span className='relative flex items-center gap-3'>
                    <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
                      <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
                      <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
                    </svg>
                    Ayman.Mohammad2025@gmail.com
                  </span>
                </motion.a>
                <p className='mt-6 text-sm text-dark/40 dark:text-light/40'>
                  Usually responds within 24 hours ⚡
                </p>
              </div>
            </div>
          </motion.div>
          {/* Status indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className='flex items-center gap-2 text-dark/60 dark:text-light/60'
          >
            <span className='relative flex h-3 w-3'>
              <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75'></span>
              <span className='relative inline-flex rounded-full h-3 w-3 bg-green-500'></span>
            </span>
            <span className='text-sm font-medium'>Available for opportunities</span>
          </motion.div>
        </div>
      </Layout>
    </main>
  )
}

export default function Contact() {
  return (
    <>
      <Head>
        <title>Ayman Mohammad | Contact</title>
        <meta name="description" content="Get in touch with Ayman Mohammad" />
      </Head>
      <TransitionEffect />
      <ContactContent />
    </>
  )
}
