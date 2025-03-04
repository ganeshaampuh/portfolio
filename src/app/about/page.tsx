import Experience from '@/components/sections/experience'
import Skills from '@/components/sections/skills'

export default function About() {
  return (
    <div className="font-base">
      <h1 className="mb-8 text-2xl font-heading sm:text-4xl">About</h1>

      <div className="mb-10 text-base sm:text-lg">
        <p>
        Software Engineer at Mekari with 8 years of experience, specializing in creating beautiful, fast, and scalable website user experiences. Experienced in building single-page applications using Vue.js and React.js. Skilled in driving product development in fast-paced startup environments, delivering solutions that scale as businesses grow. Adept at collaborating with cross-functional teams to build and launch MVPs quickly, while ensuring future scalability and performance
        </p>
      </div>

      <Skills />

      <Experience />
    </div>
  )
}
