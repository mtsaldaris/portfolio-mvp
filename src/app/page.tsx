import ApiPreview from '@/sections/api-preview/ApiPreview'
import Contact from '@/sections/Contact'
import DevProcess from '@/sections/dev-process/DevProcess'
import Hero from '@/sections/hero/Hero'
import Projects from '@/sections/projects/Projects'

export default function Home() {
  return (
    <>
      <div id="about" className="space-y-12">
        <Hero />
        <DevProcess />
      </div>
      <Projects />
      <ApiPreview />
      <Contact />
    </>
  )
}
