import Links from '@/components/links'
import Experience from '@/components/sections/experience'

export default function Home() {
  return (
    <div className="font-base">
      <h1 className="text-2xl font-heading sm:text-4xl">Ganesha Ampuh</h1>
      <p className="mt-2 text-lg sm:text-xl">Senior Frontend Engineer</p>
      <div className="mt-5 text-base sm:text-lg">
        <p>
          I craft engaging digital experiences, turning visionary concepts into functional and impactful realities through thoughtful code. 
        </p>
        <p>
          I am available for contact via phone or email.
        </p>
        <p className="mt-5">
          Let&apos;s Discuss!
        </p>
      </div>

      <Links />

      <hr className="mt-10 border-border dark:border-darkBorder" />

      <Experience />
    </div>
  )
}
