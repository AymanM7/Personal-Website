import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import TransitionEffect from '@/components/TransitionEffect'

const FramerImage = motion(Image)

export const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className='relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light'>
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light' />
      <Link href={link} target="_blank" className='w-full inline-block cursor-pointer overflow-hidden rounded-lg'>
        <FramerImage 
          src={img} 
          alt={title} 
          className='w-full h-auto'
          width={800}
          height={400}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className='capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg'>{title}</h2>
      </Link>
      <p className='text-sm mb-2'>{summary}</p>
      <span className='text-primary font-semibold dark:text-primaryDark'>{time}</span>
    </li>
  )
}

export const Article = ({ img, title, date, link }) => {
  return (
    <motion.li 
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className='relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light sm:flex-col'
    >
      <Link href={link} target="_blank">
        <h2 className='capitalize text-xl font-semibold hover:underline'>{title}</h2>
      </Link>
      <span className='text-primary font-semibold pl-4 dark:text-primaryDark sm:self-start sm:pl-0 xs:text-sm'>{date}</span>
    </motion.li>
  )
}


export function BlogsContent() {
  return (
    <div className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light'>
      <Layout className='pt-16'>
        <AnimatedText text="Words Can Change The World!" className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl' />
        <ul className='grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16'>
          <FeaturedArticle 
            title="Deep Learning Project for Audio Classification"
            summary="A comprehensive guide on building a CNN-based audio classification system using deep learning techniques. Learn how to process audio data, build neural networks, and achieve accurate classifications."
            time="5 min read"
            link="https://medium.com/@ayman.mohammad2025/deep-learning-project-for-audio-classification-1e82f9960c1d"
            img="/images/articles/audio-classification.svg"
          />
        </ul>
        <h2 className='font-bold text-4xl w-full text-center my-16 mt-32'>All Blogs</h2>
        <ul>
          <Article 
            title="Deep Learning Project for Audio Classification"
            date="2025"
            link="https://medium.com/@ayman.mohammad2025/deep-learning-project-for-audio-classification-1e82f9960c1d"
            img="/images/articles/audio-classification.svg"
          />
        </ul>
      </Layout>
    </div>
  )
}

export default function Blogs() {
  return (
    <>
      <Head>
        <title>Ayman Mohammad | Blogs</title>
        <meta name="description" content="Ayman Mohammad's blogs on ML/AI, deep learning, and technology." />
      </Head>
      <TransitionEffect />
      <main>
        <BlogsContent />
      </main>
    </>
  )
}
