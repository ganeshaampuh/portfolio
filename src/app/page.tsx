import Links from '@/components/links'
import Experience from '@/components/sections/experience'

export default function Home() {
  return (
    <div className="font-base">
      <h1 className="text-2xl font-heading sm:text-4xl">Ganesha Ampuh</h1>
      <p className="mt-2 text-lg sm:text-xl">Software Engineer - Frontend</p>
      <div className="mt-5 text-base sm:text-lg">
        <p>
          I build fast, scalable web applications with a focus on performance optimization
          and clean architecture. Passionate about turning complex problems into elegant solutions.
        </p>
        <p className="mt-5">Open to new opportunities and collaborations.</p>
      </div>

      <Links />

      <hr className="mt-10 border-border dark:border-darkBorder" />

      <Experience />
    </div>
  )
}
