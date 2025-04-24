import Hero from '@/sections/hero/Hero'
import WhatIDo from '@/sections/WhatIDo'
import ApiPreview from '@/sections/api-preview/ApiPreview'
import Projects from '@/sections/projects/Projects'
import Contact from '@/sections/Contact'

export default function Home() {
  return (
    <>
      <div id="about" className="space-y-12">
        <Hero />
        <WhatIDo />
      </div>
      <Projects />
      <ApiPreview />
      <Contact />
    </>
  )
}
