import Hero from '@/sections/Hero'
import WhatIDo from '@/sections/WhatIDo'
import Skills from '@/sections/Skills'
import ApiPreview from '@/sections/api-preview/ApiPreview'
import Projects from '@/sections/projects/Projects'
import Contact from '@/sections/Contact'

export default function Home() {
  return (
    <>
      <div id="about" className="space-y-12">
        <Hero />
        <WhatIDo />
        <Skills />
      </div>
      <ApiPreview />
      <Projects />
      <Contact />
    </>
  )
}
