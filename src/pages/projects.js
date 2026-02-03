import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import TransitionEffect from '@/components/TransitionEffect'
import { GithubIcon } from '@/components/Icons'

const FramerImage = motion(Image)

// Helper to format date with colors - season in blue, year in orange/gold with box
const DateBadge = ({ date }) => {
  const parts = date.split(' ')
  const hasSeason = parts.length > 1
  const season = hasSeason ? parts[0] : null
  const year = hasSeason ? parts[1] : parts[0]
  
  return (
    <span className='inline-flex items-baseline gap-1.5 ml-2 px-3 py-1 border-2 border-cyan-400/60 dark:border-cyan-400/80 rounded-lg bg-gradient-to-r from-cyan-50 to-amber-50 dark:from-cyan-900/30 dark:to-amber-900/30'>
      {season && (
        <span className='text-cyan-600 dark:text-cyan-300 font-semibold'>{season}</span>
      )}
      <span className='text-amber-600 dark:text-amber-400 font-semibold'>{year}</span>
    </span>
  )
}

const FeaturedProject = ({ type, title, date, summary, img, link, github }) => {
  return (
    <article className='w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]' />
      
      <Link href={link} target="_blank" className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'>
        <FramerImage 
          src={img} 
          alt={title} 
          className='w-full h-auto'
          width={800}
          height={500}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      
      <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
        <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>{type}</span>
        <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
          <h2 className='my-2 w-full text-left text-3xl font-bold dark:text-light sm:text-xl'>
            {title} <DateBadge date={date} />
          </h2>
        </Link>
        <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
        <div className='mt-2 flex items-center'>
          <Link href={github} target="_blank" className='w-10'>
            <GithubIcon />
          </Link>
          <Link href={link} target="_blank" className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base'>
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  )
}

const Project = ({ title, date, type, img, link, github }) => {
  return (
    <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4'>
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]' />
      
      <Link href={link} target="_blank" className='w-full cursor-pointer overflow-hidden rounded-lg'>
        <FramerImage 
          src={img} 
          alt={title} 
          className='w-full h-auto'
          width={800}
          height={500}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      
      <div className='w-full flex flex-col items-start justify-between mt-4'>
        <span className='text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base'>{type}</span>
        <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
          <h2 className='my-2 w-full text-left text-2xl font-bold lg:text-xl md:text-lg'>
            {title} <DateBadge date={date} />
          </h2>
        </Link>
        <div className='w-full mt-2 flex items-center justify-between'>
          <Link href={link} target="_blank" className='text-lg font-semibold underline md:text-base'>
            Visit
          </Link>
          <Link href={github} target="_blank" className='w-8 md:w-6'>
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  )
}


export function ProjectsContent() {
  return (
    <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
      <Layout className='pt-16'>
        <AnimatedText text="Turning Ideas Into Reality!" className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl' />
        <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
          <div className='col-span-12'>
            <FeaturedProject 
              title="Adveyes - ACM Research"
              date="Fall 2025"
              img="/images/projects/adveyes.svg"
              summary="Research experiment conducted as part of ACM Research at UTD. Recruited participants into our ADHD study using computer vision, eye tracking, and speech processing to collect and analyze data."
              link="https://github.com/AymanM7/Adveyes-ACM-Research"
              github="https://github.com/AymanM7/Adveyes-ACM-Research"
              type="Featured Project - Research"
            />
          </div>
          <div className='col-span-6 sm:col-span-12'>
            <Project 
              title="CNN Audio Classification"
              date="2025"
              img="/images/projects/cnn-audio.svg"
              link="https://github.com/AymanM7/CNN-Audio-Project"
              github="https://github.com/AymanM7/CNN-Audio-Project"
              type="ML/AI Project"
            />
          </div>
          <div className='col-span-6 sm:col-span-12'>
            <Project 
              title="Tesla APAC Dashboard"
              date="Spring 2025"
              img="/images/projects/tesla-dashboard.svg"
              link="https://github.com/AymanM7/Tesla-APAC-Global-Mobility-Dashboard"
              github="https://github.com/AymanM7/Tesla-APAC-Global-Mobility-Dashboard"
              type="Data Analytics"
            />
          </div>
          <div className='col-span-6 sm:col-span-12'>
            <Project 
              title="Kachow - HackUTD"
              date="Fall 2025"
              img="/images/projects/kachow.svg"
              link="https://github.com/adamFabsa/Kachow"
              github="https://github.com/adamFabsa/Kachow"
              type="Hackathon Project"
            />
          </div>
          <div className='col-span-6 sm:col-span-12'>
            <Project 
              title="UI/UX Designathon UTD"
              date="Fall 2024"
              img="/images/projects/designathon.svg"
              link="https://github.com/AymanM7/UI-UX-Designathon-UTD-Fall-2024"
              github="https://github.com/AymanM7/UI-UX-Designathon-UTD-Fall-2024"
              type="UI/UX Design"
            />
          </div>
        </div>
      </Layout>
    </main>
  )
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>Ayman Mohammad | Projects</title>
        <meta name="description" content="Ayman Mohammad's projects showcasing ML/AI, web development, and data analytics work." />
      </Head>
      <TransitionEffect />
      <ProjectsContent />
    </>
  )
}
