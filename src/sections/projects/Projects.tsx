'use client'

import ProjectCard from '@/sections/projects/ProjectCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
// Import Swiper styles
import 'swiper/css/bundle'
import { motion } from 'framer-motion'
import { SectionContainer } from '@/components/SectionContainer'

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
    githubUrl: 'https://github.com/mtsaldaris',
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
    githubUrl: 'https://github.com/mtsaldaris',
  },
  // Add more project objects here
]

export default function Projects() {
  return (
    <SectionContainer
      id="projects"
      label="PROJECTS"
      title={
        <>
          What I’ve been <span className="text-brand-primary">building</span>
        </>
      }
      description="Here’s some stuff I've been working on..."
    >
      <Swiper
        modules={[Pagination]}
        pagination={{
          clickable: true,
          el: '.custom-pagination',
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active',
        }}
        spaceBetween={16}
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 16 },
          640: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 24 },
          1280: { slidesPerView: 3, spaceBetween: 32 },
        }}
        className="w-full !pb-12 text-brand-secondary"
      >
        {projects.map((project, idx) => (
          <SwiperSlide key={project.title + idx} className="h-auto">
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
      <div className="custom-pagination mt-4 flex justify-center gap-2"></div>
    </SectionContainer>
  )
}
