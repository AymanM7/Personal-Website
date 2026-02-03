import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import TransitionEffect from '@/components/TransitionEffect'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration: 3000 })
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [isInView, value, motionValue])

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0)
      }
    })
  }, [springValue, value])

  return <span ref={ref}></span>
}

const about = () => {
  return (
    <>
      <Head>
        <title>Ayman Mohammad | About</title>
        <meta name="description" content="Learn more about Ayman Mohammad - CIS student at UT Dallas with a passion for ML/AI, cybersecurity, research, web development, and data analytics." />
      </Head>
      <TransitionEffect />
      <main className='flex w-full flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16'>
          <AnimatedText text="Passion Fuels Purpose!" className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8' />
          <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
            <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
              <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>About Me</h2>
              <p className='font-medium'>
                Hi, I&apos;m Ayman Mohammad, a Computer Information Systems and Technology student at The University of Texas 
                at Dallas (UTD) with a strong foundation in computer science fundamentals developed during my high school years. 
                I have a deep interest in Machine Learning, Cybersecurity, Research, and Data Analytics.
              </p>
              <h2 className='mb-4 mt-6 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Cybersecurity</h2>
              <p className='font-medium'>
                I&apos;m especially drawn to cybersecurity—understanding how to protect systems, secure data, and stay ahead of threats is something I enjoy learning and applying.
              </p>
              <ul className='my-2 ml-4 list-disc font-medium space-y-1'>
                <li>Securing systems and protecting sensitive data</li>
                <li>Learning about threat detection and prevention</li>
                <li>Staying current with security best practices</li>
              </ul>
              <p className='my-4 font-medium'>
                I love exploring how data, intelligent systems, and thoughtful design can come together to solve real world problems. 
                My passions span across Research, Troubleshooting, and Data Analytics. Whether I&apos;m building ML/AI powered applications, 
                turning raw data into clear, actionable insights, or developing impactful web experiences, I bring dedication and 
                curiosity to every project.
              </p>
              <h2 className='mb-4 mt-6 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Hobbies</h2>
              <p className='font-medium'>
                I love staying active with football, basketball, and soccer. I played football for my high school and middle school teams and competed 
                in a couple of leagues. I&apos;m also a big fan of video games like Madden, FIFA, and NBA 2K. ⚽🏈🏀
              </p>
              <p className='mt-4 font-medium'>
                <span className='font-bold'>Fun Fact:</span> I won the FISD Esports Tournament in 2023 for Madden! 🏅🎮
              </p>
            </div>
            
            <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8'>
              <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
              <div className='relative'>
                <div className='absolute -inset-2 bg-gradient-to-r from-primary via-primaryDark to-primary rounded-2xl blur-lg opacity-50' />
                <Image 
                  src="/images/profile/ayman-profile.jpg" 
                  alt="Ayman Mohammad" 
                  width={400}
                  height={500}
                  className='relative w-full h-auto rounded-2xl'
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
            
            <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                  <AnimatedNumbers value={5} />+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>
                  Projects Completed
                </h2>
              </div>
              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                  <AnimatedNumbers value={259} />+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>
                  GitHub Contributions
                </h2>
              </div>
            </div>
          </div>
          
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  )
}

export default about
