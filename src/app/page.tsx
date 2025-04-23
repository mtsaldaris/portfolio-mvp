import Hero from '@/sections/Hero'
import WhatIDo from '@/sections/WhatIDo'
import Skills from '@/sections/Skills'
import ApiPreview from '@/sections/ApiPreview'
import Projects from '@/sections/Projects'
import Contact from '@/sections/Contact'

export default function Home() {
  return (
    <>
      <div id="home" className="space-y-12">
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
