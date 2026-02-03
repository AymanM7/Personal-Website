import BlogsSection from '@/components/BlogsSection'
import ProjectsSection from '@/components/ProjectsSection'
import ContactSection from '@/components/ContactSection'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import HireMe from '@/components/HireMe'
import { LinkArrow } from '@/components/Icons'
import TransitionEffect from '@/components/TransitionEffect'
import lightBulb from '../../public/images/svgs/miscellaneous_icons_1.svg'

import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Skills from '@/components/Skills'

// Star component for aesthetics (bright yellow, high z-index, full opacity)
const Star = ({ className, size = 'w-2 h-2' }) => (
  <div className={`absolute ${size} z-50 opacity-100 pointer-events-none ${className}`}>
    <svg viewBox="0 0 24 24" fill="currentColor" className="text-blue-400">
      <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
    </svg>
  </div>
)

export default function Home() {
  return (
    <>
      <Head>
        <title>Ayman Mohammad</title>
        <meta name="description" content="Ayman Mohammad" />
      </Head>
      <TransitionEffect />
      <main className='flex flex-col items-center text-dark w-full min-h-screen dark:text-light relative overflow-hidden'>
        {/* Home/Landing Section with Decorative Stars */}
        <section id="home" className="w-full min-h-screen flex flex-col items-center justify-center relative">
          {/* Decorative Stars - More blue stars, scattered */}
          <Star className="absolute top-[10%] left-[15%] z-20" size="w-3 h-3" />
          <Star className="absolute top-[30%] left-[70%] z-30" size="w-2 h-2" />
          <Star className="absolute top-[60%] left-[40%] z-10" size="w-4 h-4" />
          <Star className="absolute top-[80%] left-[80%] z-20" size="w-2 h-2" />
          <Star className="absolute top-[50%] left-[10%] z-30" size="w-3 h-3" />
          <Star className="absolute top-[75%] left-[25%] z-20" size="w-2 h-2" />
          <Star className="absolute top-[20%] left-[85%] z-10" size="w-4 h-4" />
          <Star className="absolute top-[15%] left-[55%] z-20" size="w-2 h-2" />
          <Star className="absolute top-[40%] left-[60%] z-30" size="w-3 h-3" />
          <Star className="absolute top-[65%] left-[20%] z-10" size="w-2 h-2" />
          <Star className="absolute top-[85%] left-[60%] z-20" size="w-4 h-4" />
          <Star className="absolute top-[35%] left-[30%] z-30" size="w-2 h-2" />
          <Star className="absolute top-[55%] left-[80%] z-20" size="w-3 h-3" />
          <Star className="absolute top-[25%] left-[45%] z-10" size="w-2 h-2" />
          <Layout className='pt-0 md:pt-16 sm:pt-8'>
            <div className='flex items-center justify-between w-full lg:flex-col'>
              <div className='w-1/2 md:w-full flex justify-center'>
                <div className='relative'>
                  {/* Gradient glow effect behind image */}
                  <div className='absolute -inset-4 bg-gradient-to-r from-primary via-primaryDark to-primary rounded-full blur-2xl opacity-75 animate-pulse' />
                  <div className='absolute -inset-2 bg-gradient-to-b from-primary to-primaryDark rounded-full blur-xl opacity-50' />
                  <Image src="/images/profile/ayman-profile.jpg" alt="Ayman Mohammad" width={400} height={400} className='relative w-80 h-80 rounded-full object-cover border-4 border-dark dark:border-light shadow-2xl lg:w-64 lg:h-64 md:w-72 md:h-72 md:inline-block' priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw" />
                </div>
              </div>
              <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
                <AnimatedText text="Turning Data Into Decisions!" className='!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl' />
              </div>
            </div>
            {/* HireMe (Get In Touch) Button - bottom left, only on Home section */}
            <div className="flex items-end justify-start mt-8">
              <HireMe />
            </div>
          </Layout>
        </section>
        {/* About Section */}
        <section id="about" className="w-full">
          {/* About content from about.js, simplified for homepage */}
          <Layout className='pt-16'>
            <AnimatedText text="Passion Fuels Purpose!" className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8' />
            <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
              <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
                <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>About Me</h2>
                <p className='font-medium'>Hi, I&apos;m Ayman Mohammad, a Computer Information Systems and Technology student at The University of Texas at Dallas (UTD) with a strong foundation in computer science fundamentals developed during my high school years. I have a deep interest in Machine Learning, Artificial Intelligence, research, and data analytics.</p>
                <p className='my-4 font-medium'>I love exploring how data, intelligent systems, and thoughtful design can come together to solve real world problems. My passions span across research, web development, and data analytics. Whether I&apos;m building ML/AI powered applications, turning raw data into clear, actionable insights, or developing impactful web experiences, I bring dedication and curiosity to every project.</p>
                <h2 className='mb-4 mt-6 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Hobbies</h2>
                <p className='font-medium'>I love staying active with football, basketball, and soccer. I played football for my high school and middle school teams and competed in a couple of leagues. I&apos;m also a big fan of video games like Madden, FIFA, and NBA 2K. ⚽🏈🏀</p>
                <p className='mt-4 font-medium'><span className='font-bold'>Fun Fact:</span> I won the FISD Esports Tournament in 2023 for Madden! 🏅🎮</p>
              </div>
              <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8'>
                <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
                <div className='relative'>
                  <div className='absolute -inset-2 bg-gradient-to-r from-primary via-primaryDark to-primary rounded-2xl blur-lg opacity-50' />
                  <Image src="/images/profile/ayman-profile.jpg" alt="Ayman Mohammad" width={400} height={500} className='relative w-full h-auto rounded-2xl' priority />
                </div>
              </div>
            </div>
          </Layout>
        </section>
        {/* Experience Section */}
        <section id="experience" className="w-full">
          <Experience />
        </section>
        {/* Education Section */}
        <section id="education" className="w-full">
          <Education />
        </section>
        {/* Skills Section */}
        <section id="skills" className="w-full">
          <Skills />
        </section>
        {/* Projects Section */}
        <section id="projects" className="w-full">
          <BlogsSection />
        </section>
        {/* Contact Section */}
        <section id="contact" className="w-full">
          <ContactSection />
        </section>


        {/* Light Bulb SVG - bottom left */}
        <div className="fixed left-8 bottom-8 z-40 w-24 opacity-80 hidden md:inline-block">
          <Image src={lightBulb} alt="Light Bulb" className="w-full h-auto" />
        </div>
      </main>
    </>
  )
}
