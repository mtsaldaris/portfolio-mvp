'use client'

import ProjectCard from '@/sections/projects/ProjectCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { motion } from 'framer-motion'

const projects = [
  {
    image: '/images/beamconnect.png',
    title: 'Beam Connect',
    subtitle: 'A modern platform for property management',
    description:
      'A modern platform for connecting property managers, tenants, and trades. Features real-time job tracking, messaging, and more.',
    client: 'Beam Connect',
    duration: 'Ongoing',
    technologies: ['Java', 'Spring', 'Gradle', 'Azure', 'React.Js'],
    demoUrl: 'https://beamconnect.com.au/',
  },
  {
    image: '/images/beamconnect.png',
    title: 'Project 2',
    subtitle: 'A modern platform for property management',
    description:
      'A modern platform for connecting property managers, tenants, and trades. Features real-time job tracking, messaging, and more.',
    client: 'Beam Connect',
    duration: 'Ongoing',
    technologies: ['Java', 'Spring', 'Gradle', 'Azure', 'React.Js'],
    demoUrl: 'https://beamconnect.com.au/',
    githubUrl: 'https://github.com/mtsaldaris'
  },
  {
    image: '/images/beamconnect.png',
    title: 'Project 3',
    subtitle: 'A modern platform for property management',
    description:
      'A modern platform for connecting property managers, tenants, and trades. Features real-time job tracking, messaging, and more.',
    client: 'Beam Connect',
    duration: 'Ongoing',
    technologies: ['Java', 'Spring', 'Gradle', 'Azure', 'React.Js'],
    demoUrl: 'https://beamconnect.com.au/',
    githubUrl: 'https://github.com/mtsaldaris'
  },
  // Add more project objects here
]

export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <span className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-brand-secondary">
        <span className="h-1.5 w-1.5 rounded-full bg-brand-secondary" />
        Projects
        </span>
        <h2 className="mt-2 text-4xl font-bold leading-tight text-brand-dark dark:text-brand-light sm:text-5xl">
          What I’ve been <span className="text-brand-primary">building</span>
        </h2>
      </motion.div>
      <Swiper
        modules={[Pagination]}
        pagination={{
          clickable: true,
          el: '.custom-pagination',
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active',
        }}
        spaceBetween={32}
        breakpoints={{
          640: { slidesPerView: 1 },
          1024: { slidesPerView: 2 },
        }}
        className="w-full text-brand-secondary"
      >
        {projects.map((project, idx) => (
          <SwiperSlide key={project.title + idx}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard {...project} />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="custom-pagination mt-8 flex justify-center gap-2"></div>
    </section>
  )
}
